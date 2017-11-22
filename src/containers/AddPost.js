/**
 * Created by mbp on 28/10/2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import {addPostRequest, openModal} from '../actions'

let AddPost = ({dispatch, categoryId, categories}) => {
	let input, ta, sel
	
	return (
	<div >
		<form className="addPostForm" onSubmit={e => {
			e.preventDefault()
			if(!input.value.trim() ){
				return
			}
			dispatch(addPostRequest({title: input.value, body:ta.value, category_id: parseInt(sel.value)}))
			dispatch(openModal({shouldOpen:false}))
			input.value = ''
			ta.value = ''
		}}>
			<h2 className="titleText" >Create Post</h2>
			<label htmlFor="category">Category:</label>
			<select name="category" className="categorySelect" ref={category => sel = category} value={categoryId}>
				<option disabled>Select a Category</option>
				{categories.map((category)=>(
					<option value={category.id}>{category.name}</option>
				))}
			</select>
			<label htmlFor="subject">Subject: </label>
			<input className='subjectInput' name='subject' ref={subject => {input = subject }}/>
			<label htmlFor="subject">Message: </label>
			<textarea className='bodyInput' ref={body => ta = body} name="body" placeholder="Enter your messages"/>
			
			<button className="submitButton" type="submit">
				Add Post
			</button>
		</form>
	</div>
	)
}
// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		onSubmitClick: ({id, title, body, category_id})=> {
// 			dispatch(openModal({shouldOpen:false}))
// 		}
// 	}
// }

AddPost = connect()(AddPost)
export default AddPost