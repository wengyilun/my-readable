import React, { Component } from 'react';
import {Route, withRouter, Switch} from 'react-router-dom'
import {fetchCategories, fetchPosts, fetchComments} from '../utils/PostsAPI'
import { connect } from 'react-redux';
import {categoryFetched } from '../actions'
import {postFetched} from '../actions/postActions'
import {commentsFetched, } from '../actions/commentActions'
import Nav from './Nav'
import Header from './Header'
import Posts from '../pages/Posts'
import NotFoundPage from '../pages/NotFoundPage'
import ModalContainer from '../containers/ModalContainer'
import CategoriesPage from '../pages/CategoriesPage'
import Home from '../pages/Home'
import PostDetail from '../pages/PostDetail'
import Loading from 'react-loading'

// TODO: Add back button from Detail page
// TODO: Add post count to category
// TODO: Clean up Menu CSS
// TODO: Add Login
// TODO: Add Author
// TODO: Add History
// TODO: Add MediaQuery
// TODO: Add Database

class App extends Component {
	state = {
		loading: true
	}
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
			this.setState({loading: false})
		})
	}
	
	render(){
		
		const {loading} = this.state
		return (
				loading === true
					? <div className="loaderContainer">
						 <Loading delay={200} type='spin' color='#fff' className='loading' />
				      </div>
					: <div className="App" >
						<ModalContainer/>
						<Header/>
						<Nav/>
					    <div className="main-content">
					    	<Switch>
								<Route exact path="/" component={Posts} />
								<Route exact path="/:category/posts" component={CategoriesPage} />
								<Route exact path="/posts" component={Posts}/>
								<Route path="/posts/:postId" component={PostDetail}/>
								<Route component={NotFoundPage}/>
							</Switch>
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

export default withRouter(connect(
	null, mapDispatchToProps
)(App))
