import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {fetchCategories, fetchPosts, fetchComments} from '../utils/PostsAPI'
import { connect } from 'react-redux';
import {categoryFetched, postFetched, commentsFetched, } from '../actions'
import Nav from './Nav'
import Header from './Header'
import TabBar from './TabBar'
import PostList from './PostList'
import AddPost from '../containers/AddPost'
import ModalContainer from '../containers/ModalContainer'


class App extends Component {
	componentWillMount(){
		this.getCategories()
		this.getPosts()
	}
	
	getCategories(){
		fetchCategories()
		.then(categories => {
			this.props.onCategoryFetched(categories)
		})
	}
	
	getPosts(){
		fetchPosts()
		.then(posts => {
			this.getComments(posts)
		})
	}
	
	getComments(posts){
		fetchComments()
		.then(comments => {
			this.props.onPostFetched(posts)
			this.props.onCommentsFetched(comments)
		})
	}
	
	render(){
		return (
			<div className="App" >
				<Nav/>
				
				<ModalContainer/>
				<div className="main-content">
					<Header/>
					<Route exact path="/" render={() => (
						<section className="postContainer">
							<TabBar/>
							<PostList/>
						</section>
					)}/>
					<Route exact path="/addPost" render={() => (
						<section className="postContainer">
							<AddPost />
						</section>
					)}/>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onCategoryFetched: (categories) => {dispatch(categoryFetched(categories))},
		onPostFetched: (posts) => {dispatch(postFetched(posts))},
		onCommentsFetched: (comments) => {dispatch(commentsFetched(comments))}
	}
}

export default connect(
	null, mapDispatchToProps
)(App)
