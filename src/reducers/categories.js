
import { CATEGORY_FETCHED } from '../actions/actionTypes'

const initialCategoryState = [
		{
			id: 0,
			name: 'all',
			displayName:'All'
		},
		// {
		// 	id: 1,
		// 	name: 'strayed'
		// },
		// {
		// 	id: 2,
		// 	name: 'roadkill'
		// },
		// {
		// 	id: 3,
		// 	name: 'abused'
		// }
]

const categories = (state= initialCategoryState , action) => {
	switch (action.type) {
		case CATEGORY_FETCHED:
			return [
				...state,
				...action.categories
			]
		default :
			return state
	}
}

export default categories