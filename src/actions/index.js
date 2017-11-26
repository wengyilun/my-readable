// import {addPost,
// addComment,
// deleteCommentById,
// updatePostVote,
// updateCommentVote,
// editComment,
// } from '../utils/PostsAPI'
import {
	OPEN_MODAL,
	SET_VISIBILITY_FILTER,
	CATEGORY_FETCHED,
	UPDATE_SEARCH_QUERY,
 } from './actionTypes';
 
export function categoryFetched (categories){
	return{
		type: CATEGORY_FETCHED,
		categories
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}


export function openModal({shouldOpen, component}) {
	return {
		type: OPEN_MODAL,
		shouldOpen,
		component
	}
}


// SEARCH
export function searchSubmitted(query){
	return {
		type: UPDATE_SEARCH_QUERY,
		query
	}
}







