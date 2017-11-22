import {addPost,
editPost,
deletePostById,
addComment,
deleteCommentById,
updatePostVote,
updateCommentVote} from '../utils/PostsAPI'

export const DELETE_POST = 'DELETE_POST'
export const ON_EDIT_POST = 'ON_EDIT_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const OPEN_MODAL = 'OPEN_MODAL'
export const UPDATE_POST_VOTE = 'UPDATE_POST_VOTE'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const CATEGORY_FETCHED = 'CATEGORY_FETCHED'
export const POST_FETCHED = 'POST_FETCHED'
export const ADD_POST = 'ADD_POST'
export const POST_ADDED = 'POST_ADDED'
export const POST_EDITED = 'POST_EDITED'
export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
export const COMMENT_DELETED = 'COMMENT_DELETED'
export const UPDATE_COMMENT_VOTE = 'UPDATE_COMMENT_VOTE'
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY'


export function categoryFetched (categories){
	return{
		type: CATEGORY_FETCHED,
		categories
	}
}

export function postFetched (posts){
	return{
		type: POST_FETCHED,
		posts
	}
}

// ADD POST
export function addPostRequest({title,  body, category_id}){
	return dispatch => {
		return addPost({title,  body, category_id})
				.then(post => {
						dispatch(postAdded(post))
				})
	}
}
export function postAdded (post){
	return{
		type: POST_ADDED,
		post
	}
}

// DELETE POST
export function onDeletePost(id){
	return dispatch => {
		return deletePostById(id)
		.then(post => {
			dispatch(postDeleted(post))
		})
	}
}
export function postDeleted(post){
	return {
		type: DELETE_POST,
		post
	}
}

// EDIT POST
export function onEditPost({id, title, body, category_id}){
	console.log(title,body,category_id)
	return {
		type: ON_EDIT_POST,
		id,
		title,
		body,
		category_id
	}
}
export function editPostRequest(post){
	return dispatch => {
		return editPost(post)
		.then(post => {
			dispatch(postEdited(post))
		})
	}
}
export function postEdited (post){
	return{
		type: POST_EDITED,
		post
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}


export function openModal({shouldOpen, mode}) {
	return {
		type: OPEN_MODAL,
		shouldOpen,
		mode
	}
}

// VOTE
export function onPostVoteUpdate ({id, option}){
	return dispatch => {
		return updatePostVote({id, option})
		.then((post) => {
			dispatch(postVoteUpdated(post))
		})
	}
}


export function postVoteUpdated (post){
	return {
		type: UPDATE_POST_VOTE,
		post
	}
}

// Comments
export function onAddComment(comment){
	return dispatch => {
		return addComment(comment)
		.then(comment=> {
			dispatch(commentAdded(comment))
		})
	}
}

export function commentAdded(comment) {
	return {
		type: ADD_COMMENT,
		comment
	}
}

export function commentsFetched(comments) {
	return {
		type: COMMENTS_FETCHED,
		comments
	}
}

export function onDeleteComment(id) {
	return dispatch => {
		return deleteCommentById(id)
		.then((comment) => {
			dispatch(commentDeleted(comment))
		})
	}
}

export function commentDeleted(comment) {
	return {
		type: COMMENT_DELETED,
		comment
	}
}

export function onCommentVoteUpdate({id, option}){
	return dispatch => {
		return updateCommentVote({id, option})
		.then((comment) => {
			dispatch(commentVoteUpdated(comment))
		})
	}
}

export function commentVoteUpdated(comment){
	return {
		type: UPDATE_COMMENT_VOTE,
		comment
	}
}

// SEARCH
export function searchSubmitted(query){
	return {
		type: UPDATE_SEARCH_QUERY,
		query
	}
}







