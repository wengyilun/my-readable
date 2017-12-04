import {
ADD_POST,
DELETE_POST,
DO_VOTE,
POST_FETCHED,
POST_ADDED,
POST_EDITED,
UPDATE_POST_VOTE } from '../actions/actionTypes'

const initialPostState = [
	// {   id: 1,
	// 	category_id: 1,
	// 	title: 'Why do we use it?',
	// 	body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
	// 	comments:[],
	// 	votes:0,
	// 	created_datetime:'10/1/2017 12:00am'
	// },
	// {   id: 2,
	// 	category_id: 2,
	// 	title: 'Full Service Shopper (Car Required)',
	// 	body: 'ts  will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
	// 	comments:[],
	// 	votes:0,
	// 	created_datetime:'11/11/2017 12:00am'
	// },
]

function posts(state = initialPostState, action){
	const {id, title, body, category_id, voteScore}  = action
	switch (action.type){
		case ADD_POST:
			return [
				...state,
				{
					id: id,
					category_id: category_id,
					title: title,
					body: body,
					author: 'Ellen',
					voteScore:0
				}
			]
		case POST_EDITED:
			let idx = state.findIndex((post)=>(post.id === action['post'].id))
			return Object.assign([], state, {
				[idx]: Object.assign({}, state[idx], {
					title: action['post'].title,
					body: action['post'].body,
					category_id: action['post'].category_id,
					last_edited: action['post'].last_edited
				})
			});
		case DELETE_POST:
			return state.filter(post => (post.id !== action.post['id']))
		
		case UPDATE_POST_VOTE:
			 idx = state.findIndex((post)=>(post.id === action.post['id']))
			return Object.assign([], state, {
				[idx]: Object.assign({}, state[idx], {
					voteScore: action['post'].voteScore,
				})
			});
			
		case POST_FETCHED:
			return action.posts
		
		case POST_ADDED:
			return [
				...state,
				{
					id: action['post'].id,
					created_datetime: action['post'].created_datetime,
					category_id: action['post'].category_id,
					title: action['post'].title,
					body: action['post'].body,
					author: 'Ellen',
					voteScore: action['post'].voteScore
				}
			]
			
		
		default:
			return state
	}
}

export default posts