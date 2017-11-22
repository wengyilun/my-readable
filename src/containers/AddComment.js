/**
 * Created by mbp on 04/11/2017.
 */
 import React, {Component} from 'react'
 import {connect} from 'react-redux'
 import {onAddComment} from '../actions'
 
class AddComment extends Component {
	state = {
		body:'',
		author:''
	}
	
	handleBodyChange = (value)=>{this.setState({'body': value})}
	
	render(){
		let {body} = this.state
		let {dispatch, parentId} = this.props
		return(
			<div className="addCommentBar">
				<input
					className="addComment"
					placeholder="Add a comment"
					value={body}
					onChange={(e)=> this.handleBodyChange(e.target.value)}/>
				<button
					className="addCommentButton"
					onClick={(e) => {
						e.preventDefault()
						dispatch(onAddComment({parentId, body}))
					}}>
					Add Comment
				</button>
			</div>
		)
	}
}
AddComment = connect()(AddComment)
export default AddComment
