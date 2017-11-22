/**
 * Created by mbp on 29/10/2017.
 */
import { OPEN_MODAL } from '../actions'

function modal(state = {}, action){
	switch (action.type){
		 case OPEN_MODAL:
			 return Object.assign({}, state, {
				 shouldOpen: action.shouldOpen,
				 mode: action.mode
			 })
		 default:
			 return state
	}
}

export default modal
