/**
 * Created by mbp on 28/10/2017.
 */
import * as  React from 'react'
import {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import { openModal, editPostRequest} from '../actions'
import {capitalize} from '../utils/helpers'

class EditPost extends Component {
	state={
		id: 0,
		title: '',
		body: '',
		category_id: 0,
	}
	
	componentDidMount(){
		this.setState({
			id: this.props.currentPost.id,
			title:  this.props.currentPost.title,
			body: this.props.currentPost.body,
			category_id: this.props.currentPost.category_id
		})
	}
	
	handleCategoryChange = (value)=>{this.setState({'category_id': parseInt(value)})}
	handleSubjectChange = (value)=>{this.setState({'title': value})}
	handleBodyChange = (value)=>{this.setState({'body': value})}
	
	render(){
		const {id, title, body, category_id} = this.state
		const {onSubmitClick} = this.props
		let input, ta
		
		return (
			<div >
				<form className="addPostForm" onSubmit={e => {
					e.preventDefault()
					if(!input.value.trim()){
						return
					}
					
					onSubmitClick({id, title, body, category_id})
					
					input.value = ''
					ta.value = ''
				}}>
					<h2 className="titleText" >Edit Post</h2>
					<label htmlFor="category">Category:</label>
					<select
						name="category"
						className="categorySelect"
						value={category_id}
						onChange={(e)=> this.handleCategoryChange(e.target.value)}>
						<option disabled>Select a Category</option>
						{this.props.categories.map(category=>(
							<option value={category.id}>{capitalize(category.name)}</option>
						))}
					</select>
					<label htmlFor="subject">Title: </label>
					<input
						className='subjectInput'
						name='subject'
						ref={subject => {input = subject }}
						value={title}
						onChange={(e) => this.handleSubjectChange(e.target.value)}/>
					<label htmlFor="subject">Message: </label>
					<textarea
						className='bodyInput'
						ref={body => ta = body}
						name="body"
						placeholder="Enter your messages"
						value={body}
						onChange={(e)=> this.handleBodyChange(e.target.value)}/>
					
					<button className="submitButton" type="submit">
						Save
					</button>
				</form>
			</div>
		)
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmitClick: ({id, title, body, category_id})=> {
			dispatch(openModal({shouldOpen:false}))
			dispatch(editPostRequest({id, title, body, category_id}))
		}
	}
}

EditPost = connect(null, mapDispatchToProps)(EditPost)
export default EditPost