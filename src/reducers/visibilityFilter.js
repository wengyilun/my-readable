/**
 * Created by mbp on 28/10/2017.
 */
const visibilityFilter = (state = "all", action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter