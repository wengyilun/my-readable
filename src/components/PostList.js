/**
 * Created by mbp on 27/10/2017.
 */
import React, {Component} from 'react'
import Post from './Post'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import GoDiffAdded from 'react-icons/lib/go/diff-added';
import FaSortNumericAsc from 'react-icons/lib/fa/sort-numeric-asc';
import FaSortNumericDesc from 'react-icons/lib/fa/sort-numeric-desc';
import FaSortAmountDesc from 'react-icons/lib/fa/sort-amount-desc';
import FaSortAmountAsc from 'react-icons/lib/fa/sort-amount-desc';
import FaSortAlphaDesc from 'react-icons/lib/fa/sort-alpha-desc';
import FaSortAlphaAsc from 'react-icons/lib/fa/sort-alpha-asc';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import {onDeletePost,openModal} from '../actions'

class PostList extends Component{
	state = {
		sortBy:''
	}
	
	handleSort = (prop =>{
		this.setState({'sortBy': prop})
	})
	render(){
		const {dispatch, posts,  onDeletePost, onAddPost, filter, searchQuery} = this.props
		let colorBar = `${filter}-color-bar`
		let searchedResult
		
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
				<div className={colorBar}>
					<label>sort by Date: </label>
						<FaSortNumericAsc className="addPostButton iconButton"  size={24}
									  onClick={ e => {
										  e.preventDefault()
										  this.handleSort('created_datetime')
									  }}/>
				
					<FaSortNumericDesc className="addPostButton iconButton"  size={24}
									   onClick={ e => {
										   e.preventDefault()
										   this.handleSort('-created_datetime')
									   }}/>
					<label>sort by Votes: </label>
					
					<FaSortAmountDesc className="addPostButton iconButton" size={24}
									  onClick={ e => {
										  e.preventDefault()
										  this.handleSort('voteScore')
									  }}/>
					
					<FaSortAmountAsc className="addPostButton" size={20}
									 onClick={ e => {
										 e.preventDefault()
										 this.handleSort('-voteScore')
									 }}/>
					<label>sort by Title: </label>
					<FaSortAlphaAsc className="addPostButton" size={20}
									 onClick={ e => {
										 e.preventDefault()
										 this.handleSort('title')
						
									 }}/>
					<FaSortAlphaDesc className="addPostButton" size={20}
									 onClick={ e => {
										 e.preventDefault()
										 this.handleSort('-title')
						
									 }}/>
				
				</div>
				<li>
					<ul>
						{searchedResult.map(post => (
							<Post key={post.id} {...post}
								  onClick={() => onDeletePost(post.id)}
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
		onAddPost: () => {dispatch(openModal({shouldOpen:true, mode:'addPost'}))}
	}
}

PostList = connect(
	mapStateToProps, mapDispatchToProps
)(PostList)

export default PostList