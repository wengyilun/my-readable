/**
 * Created by mbp on 04/11/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {onDeleteComment, onEditComment} from '../../actions'
import Voting from '../Voting'
import {convertToDate} from '../../utils/helpers'
import './Comment.css'
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';

class Comment extends Component {
	state = {
		date:'',
		body:'',
		likes: 0,
		showReply: false,
		isEditing: false,
		parentId: null
	}
	componentDidMount(){
		this.setState({
			parentId: this.props.parentId,
			body: this.props.body
		})
	}
	
	handleBodyChange = (value)=>{this.setState({'body': value})}
	
	render(){
		let ta
		let {date, body, likes, showReply} = this.state
		let {dispatch, id, voteScore, created_datetime, parentId} = this.props
		return(
			<li className="comment-item">
						<FaEdit className="editButton top-right" size={22}
								onClick={(e)=>{
									e.preventDefault()
									this.setState({isEditing: true})
								}}/>
						<FaTrash className="deleteButton top-right" size={20}
								 onClick={(e)=>{
									 e.preventDefault()
									 dispatch(onDeleteComment(id))
								 }}/>
						 {this.state.isEditing
							 ?  <form className="addPostForm" onSubmit={e => {
									 e.preventDefault()
									 if(!ta.value.trim()){
										 return
									 }
									 dispatch(onEditComment({body, id, parentId, voteScore}))
								 	this.setState({isEditing: false})
							     }}>
								     <h3>Edit Comment</h3>
								 	 <span className="commentDate">{convertToDate(created_datetime)}</span>
									 <div><textarea
									 		className="commentBodyInput"
									 		type="text"
									 		value={body}
											ref={body => {ta = body }}
										    onChange={(e) => this.handleBodyChange(e.target.value)}/>
									 </div>
									 <button type="submit">Save</button>
									 <button onClick={(e)=> {
									 	e.preventDefault()
										 this.setState({isEditing: false})
									 }}>Cancel</button>
							    </form>
						 	:   <div>
						 			<span className="commentDate">{convertToDate(created_datetime)}</span>
								 	<p className="commentBody">{body}</p>
							    </div>
						 }
						
						<div>
							<Voting voteScore={voteScore} type="comment" id={id}/>
							{/*<button className="replyButton" onClick={(e)=>{*/}
							{/*e.preventDefault()*/}
							{/*this.setState({showReply: true})*/}
							{/*}}>Reply*/}
							{/*</button>*/}
						</div>
						{showReply === true
							? <div><input className="replyInput"/><button>Enter</button></div>
							: null
						}
					
			</li>
		)
	}
}
Comment = connect()(Comment)
export default Comment