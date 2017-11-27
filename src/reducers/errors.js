/**
 * Created by mbp on 25/11/2017.
 */
import {
	SINGLE_POST_FETCHED_FAILED,
} from '../actions/actionTypes'

const initialState=''

function errors(state=initialState, action){
		switch (action.type){
			case SINGLE_POST_FETCHED_FAILED:
				return {
					...action.err
				}
			
			default:
				return state
		}
	}
	
export default errors
