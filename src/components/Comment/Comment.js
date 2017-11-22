/**
 * Created by mbp on 04/11/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {onDeleteComment} from '../../actions'
import Voting from '../Voting'
import {convertToDate} from '../../utils/helpers'
import './Comment.css'
class Comment extends Component {
	state = {
		id:0,
		date:'',
		body:'',
		likes: 0,
		showReply: false
	}
	componentDidMount(){
		this.setState({
			parentId: this.props.parentId,
			body: this.props.body
		})
	}
	render(){
		let {date, body, likes, showReply} = this.state
		let {dispatch, id, voteScore, created_datetime} = this.props
		return(
			<li className="comment-item">
				<div className="comment-item-top">
					<button onClick={(e)=>{
						e.preventDefault()
						dispatch(onDeleteComment(id))
					}}>Delete</button>
				</div>
				<span className="commentDate">{convertToDate(created_datetime)}</span>
				
				<p className="commentBody">{body}</p>
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