/**
 * Created by mbp on 23/11/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPostRequest, openModal} from '../../actions'
import Post from "../../components/Post"
import AddComment from "../../containers/AddComment"
import Comment from "../../components/Comment"
import Voting from '../../components/Voting'
import FaCommentO from 'react-icons/lib/fa/comment-o';
import {convertToDate} from '../../utils/helpers'

class PostDetail extends Component {
	render(){
		const {filtered_comments, data} = this.props
		// const id = this.props.match.params.postId
		return(
			<div>Post Detail
				<main className="postItemBodyMain">
					<div><span className="postDate">{convertToDate(data.created_datetime)}</span>
						{data.last_edited > 0 && (
							<span className="postDate"> Last edited on:{convertToDate(data.last_edited)}</span>)}
					</div>
					<p>{data.body}</p>
					<footer>
						<div className="comment">{filtered_comments && filtered_comments.length} comment <FaCommentO size="20"/></div>
						<Voting voteScore={data.voteScore} type="post" id={data.id}/>
					</footer>
				</main>
				<div className="commentList">
					<AddComment parentId={data.id} />
					<div>
						<ul>
							{filtered_comments && filtered_comments.map(comment => (
								<Comment {...comment}/>
							))}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const post = state.posts.find(post => post.id === state.currentPost.id)
	return {
		//TODO: Load comment
		filtered_comments: 	state.comments.filter(comment => comment.parentId === state.currentPost.id ),
		data: {...post}	//state.currentPost
	}
}

export default PostDetail = connect(mapStateToProps, null)(PostDetail)