/**
 * Created by mbp on 12/11/2017.
 */
import FaHandODown from 'react-icons/lib/fa/hand-o-down';
import FaHandOUp from 'react-icons/lib/fa/hand-o-up';
import { onPostVoteUpdate, onCommentVoteUpdate} from '../actions'
import {connect} from 'react-redux'
import React from 'react'

let Voting = ({dispatch, type, voteScore, id}) => (
		<div className="vote">
			
			<FaHandOUp size="22" style={{color: "#ffaaa", paddingRight:"4px"}}
							onClick={e=>{
								e.preventDefault()
								type==='post'
								?  dispatch(onPostVoteUpdate({option:'upVote', id: id}))
								:  dispatch(onCommentVoteUpdate({option:'upVote', id: id}))
							}}/>
			{voteScore} Votes
			<FaHandODown size="22" style={{color: "#ffaaa",  paddingLeft:"4px"}}
							onClick={e=>{
								e.preventDefault()
								type==='post'
									?  dispatch(onPostVoteUpdate({option:'downVote', id: id}))
									:  dispatch(onCommentVoteUpdate({option:'downVote', id: id}))
							}}/>
		</div>
)
Voting = connect()(Voting)
export default Voting
