/**
 * Created by mbp on 25/11/2017.
 */
import {
	addComment,
	deleteCommentById,
	updateCommentVote,
	editComment,
} from '../utils/PostsAPI'
import {
	ADD_COMMENT,
	COMMENTS_FETCHED,
	COMMENT_DELETED,
	UPDATE_COMMENT_VOTE,
	COMMENT_EDITED
} from './actionTypes';


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

// Edit comment
export function onEditComment(comment){
	return dispatch => {
		return editComment(comment)
		.then(comment=> {
			dispatch(commentEdited(comment))
		})
	}
}
export function commentEdited(comment) {
	return {
		type: COMMENT_EDITED,
		comment
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
