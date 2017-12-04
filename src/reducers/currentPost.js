import {
ON_EDIT_POST,
ON_VIEW_POST_DETAIL,
SINGLE_POST_FETCHED,
DELETE_POST
} from '../actions/actionTypes'

function currentPost(state=null, action){
	switch (action.type){
		case ON_EDIT_POST:
			return {
				...action.data
			}
			
		case ON_VIEW_POST_DETAIL:
			return {
				...action.data
			}
		
		case SINGLE_POST_FETCHED:
			return {
				...action.post
			}
			
		case DELETE_POST:
			return {}
			
		default:
			return state
	}
}

export default currentPost
