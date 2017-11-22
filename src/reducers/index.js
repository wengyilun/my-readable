/**
 * Created by mbp on 23/10/2017.
 */
import {combineReducers} from 'redux'
import posts from './posts'
import visibilityFilter from './visibilityFilter'
import categories from './categories'
import modal from './modal'
import currentPost from './currentPost'
import comments from './comments'
import search from './search'

// const initialUserState = {
// 	users:[
// 		{ id: 1,
// 			username: 'eweng',
// 			email: 'wengellen@gmail.com'},
// 		{ id: 2,
// 			username: 'paul',
// 			email: 'paul@gmail.com'}
// 	],
// }



const mougogoApp  = combineReducers({
	categories,
	posts,
	visibilityFilter,
	modal,
	currentPost,
	comments,
	search
})

export default mougogoApp