/**
 * Created by mbp on 12/11/2017.
 */
import {UPDATE_SEARCH_QUERY} from '../actions/actionTypes'

const search = (state = "", action) => {
	switch (action.type) {
		case UPDATE_SEARCH_QUERY:
			return action.query
		default:
			return state
	}
}

export default search