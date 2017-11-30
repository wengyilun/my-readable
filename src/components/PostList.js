/**
 * Created by mbp on 27/10/2017.
 */
import React, {Component} from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {openModal, setVisibilityFilter} from '../actions'
import {onDeletePost} from '../actions/postActions'

class PostList extends Component{
	state = {
		sortBy:''
	}
	componentWillMount (){
		this.props.paramFilter && this.props.setVisibilityFilter(this.props.paramFilter)
	}
	
	handleSortChange = (e)=>{
		e.preventDefault()
		this.setState({'sortBy': e.target.value})
	}
	
	render(){
		const {posts, filter, searchQuery} = this.props
		const colorBar = `${filter}-color-bar`
		let searchedResult
		let sel
		if(posts.length === 0){
			return <p className="postMessage">There is no posts to display</p>
		}
		
		if(searchQuery){
			const match = new RegExp(escapeRegExp(searchQuery), 'i')
			searchedResult = posts.filter((post) => match.test(post.title) ||
			match.test(post.body))
		}else{
			searchedResult = posts
		}
		
		searchedResult.sort(sortBy(this.state.sortBy))
	
		return (
			<div className="postListContainer">
				<div className={[colorBar, 'sortSelectContainer'].join(' ')}>
					<select name="sortMenu" className="sortSelect"
						ref={sort => sel = sort}
						value={this.state.sortBy}
						onChange={(e)=> this.handleSortChange(e)}>
						<option value='created_datetime'>Sort by Date: Old to New</option>
						<option value='-created_datetime'>Sort by date: New to Old</option>
						<hr/>
						<option value='title'>Sort by Title: Z to A</option>
						<option value='-title'>Sort by Title: A to Z</option>
						<hr/>
						<option value='body'>Sort by Body: Z to A</option>
						<option value='-body'>Sort by Body: A to Z</option>
						<hr/>
						<option value='voteScore'>Sort by Vote: Low to High</option>
						<option value='-voteScore'>Sort by Vote: High to Low</option>
						))}
					</select>
				</div>
				<li className="postListWrapper">
					<ul>
						{searchedResult.map(post => (
							<Post key={post.id} {...post}
							/>
						))}
					</ul>
				</li>
			</div>
		)
	}
}

PostList.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			body: PropTypes.string.isRequired,
			category_id: PropTypes.number.isRequired
		}).isRequired
	).isRequired,
	onPostClick: PropTypes.func.isRequired
}

const getVisiblePosts = (posts, filter)=>{
	switch (filter){
		case 'strayed':
			return posts.filter( p => p.category_id === 1)
		case 'roadkill':
			return posts.filter( p => p.category_id === 2)
		case 'abused':
			return posts.filter(p => p.category_id === 3)
		default:
			return posts
	}
}

const mapStateToProps = state => {
	return {
  		posts: getVisiblePosts(state.posts, state.visibilityFilter),
		filter: state.visibilityFilter,
		searchQuery: state.search
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onDeletePost: (id) => {dispatch(onDeletePost(id))},
		onAddPost: () => {dispatch(openModal({shouldOpen:true, mode:'AddPost'}))},
		setVisibilityFilter: (filter) => {
			dispatch(setVisibilityFilter(filter))
		}
	}
}

PostList = connect(
	mapStateToProps, mapDispatchToProps
)(PostList)

export default PostList