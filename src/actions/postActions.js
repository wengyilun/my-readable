import {
	DELETE_POST,
	ON_EDIT_POST,
	POST_ADDED,
	POST_EDITED,
	POST_FETCHED,
	ON_VIEW_POST_DETAIL,
	SINGLE_POST_FETCHED,
	UPDATE_POST_VOTE,
	SINGLE_POST_FETCHED_FAILED
	
} from './actionTypes';

import {
    addPost,
	editPost,
	deletePostById,
	fetchPostById,
	updatePostVote
	} from '../utils/PostsAPI'

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

// VIEW POST
export function onViewPostDetail(post){
	return {
		type: ON_VIEW_POST_DETAIL,
		data: post
	}
}
export function fetchSinglePostRequest(id){
	return dispatch => {
		return fetchPostById(id)
		.then(post => {
			dispatch(singlePostFetched(post))
		})
	}
}

export function singlePostFetched (post){
	return{
		type: SINGLE_POST_FETCHED,
		post
	}
}
export function singlePostFetchedFailed (err){
	return{
		type: SINGLE_POST_FETCHED_FAILED,
		err
	}
}

// EDIT POST
export function onEditPost({id, title, body, category_id}){
	console.log(title,body,category_id)
	return {
		type: ON_EDIT_POST,
		data:{
			id,
			title,
			body,
			category_id
		}
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