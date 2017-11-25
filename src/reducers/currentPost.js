import { ON_EDIT_POST, ON_VIEW_POST_DETAIL } from '../actions'

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
		default:
			return state
	}
}

export default currentPost
