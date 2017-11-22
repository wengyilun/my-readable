import { ON_EDIT_POST } from '../actions'

function currentPost(state=null, action){
	switch (action.type){
		case ON_EDIT_POST:
			return {
				...action
			}
		default:
			return state
	}
}

export default currentPost
