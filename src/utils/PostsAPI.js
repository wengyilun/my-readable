/**
 * Created by mbp on 04/11/2017.
 */
import * as uuid from 'uuid'
import * as axios from 'axios'
const api_url = "http://localhost:7000"
let token = localStorage.token

if(!token)
	token = localStorage.token = Math.random().toString(36).substr(-8)

const api = axios.create({
	baseURL: "http://localhost:7000",
	timeout: 80000,
	headers: {
		authorization: token
	}
})


const headers = {
	'Accept': 'application/json',
	'Authorization': token
}

export const fetchCategories = () => {
 	return fetch(`${api_url}/categories`, {headers})
	.then(res => res.json())
	.then(data => data.categories.map((category, index)=> (
 	{id: index+1,
 		name: category.name
	})))
}

export const fetchPosts = () => {
	return fetch(`${api_url}/posts`, {headers})
	.then(res => res.json())
	.then(data => data)
}

export const addPost = (post) => {
	 const {title, body, author, category_id, voteScore} = post
	 return api.post(`/posts`, {
	 	id: uuid.v4(),
	 	created_datetime:new Date().getTime(),
	 	title,
	 	body,
	 	author,
	 	category_id,
	 	voteScore,
	 })
	 .then((res) => res.data)
}

export const editPost = (post)=>{
	const {id, title, body, category_id} = post
	
	return api.put(`/posts/${id}`, {
		    last_edited:new Date().getTime(),
			title,
		    body,
		    category_id,
	})
	.then((res) => res.data)
}

export const fetchPostById = (id) =>{
	return api.get(`/posts/${id}`)
	.then((res) => res.data)
}

export const deletePostById =(id) => {
	return api.delete(`/posts/${id}`)
	.then((res) => res.data)
}

export const addComment = (comment) => {
	const {parentId, body} = comment
	return api.post(`/comments`,
			{
				id: uuid.v4(),
				parentId: parentId,
				created_datetime:new Date().getTime(),
				body: body,
				author: 'pt'
			})
		.then((res) => res.data)
}

export const editComment = (comment) => {
	const {parentId, body, id} = comment
	return api.put(`/comments/${id}`, {
		last_edited:new Date().getTime(),
		body,
		parentId,
	})
	.then((res) => res.data)
}

export const fetchComments = () => {
	return api.get(`/comments`)
	.then((res) => res.data)
}

export const updatePostVote = ({id, option}) => {
	return api.post(`/posts/${id}`,{
		option
	})
	.then((res) => res.data)
}

export const updateCommentVote = ({id, option}) => {
	return api.post(`/comments/${id}`,{
		option
	})
	.then((res) => res.data)
}

export const deleteCommentById = (id)=> {
   return api.delete(`/comments/${id}`)
   	.then((res) => res.data)
}