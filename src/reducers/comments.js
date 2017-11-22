/**
 * Created by mbp on 05/11/2017.
 */
import { ADD_COMMENT, COMMENTS_FETCHED, COMMENT_DELETED, UPDATE_COMMENT_VOTE } from '../actions'
let initialState=[]

function comments(state=initialState, action){
	
	switch (action.type){
		case ADD_COMMENT:
			return [
			   ...state,
				{
					...action.comment
				}
			]
		case COMMENTS_FETCHED:
			return   [
				...state,
				...action.comments
			]
			
		case COMMENT_DELETED:
			return  state.filter(comment => (comment.id !== action.comment['id']))
		
		case UPDATE_COMMENT_VOTE:
			let idx = state.findIndex((comment)=>(comment.id === action.comment['id']))
			return Object.assign([], state, {
				[idx]: Object.assign({}, state[idx], {
					voteScore: action['comment'].voteScore,
				})
			});
		default:
			return state
	}
}

export default comments