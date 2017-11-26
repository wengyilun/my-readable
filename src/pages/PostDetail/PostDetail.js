/**
 * Created by mbp on 23/11/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSinglePostRequest} from '../../actions'
import AddComment from "../../containers/AddComment"
import Comment from "../../components/Comment"
import Voting from '../../components/Voting'
import FaCommentO from 'react-icons/lib/fa/comment-o';
import {convertToDate} from '../../utils/helpers'

class PostDetail extends Component {
	componentWillMount (){
		this.props.onfetchSinglePostRequest(this.props.match.params.postId)
	}
	
	render(){
		const {filtered_comments} = this.props
		const {created_datetime, last_edited, voteScore, id, body} = this.props
		
		if(voteScore === undefined){
			return (
				<div>Loading</div>
			)
		}
		return(
			<div>Post Detail
				<main className="postItemBodyMain">
					<div><span className="postDate">{created_datetime &&  convertToDate(created_datetime)}</span>
						{last_edited > 0 && (
							<span className="postDate"> Last edited on:{last_edited && convertToDate(last_edited)}</span>)}
					</div>
					<p>{body}</p>
					<footer>
						<div className="comment">{filtered_comments && filtered_comments.length} comment <FaCommentO size="20"/></div>
						<Voting voteScore={voteScore} type="post" id={this.props.match.params.postId}/>
					</footer>
				</main>
				<div className="commentList">
					<AddComment parentId={this.props.match.params.postId} />
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
	if(state.currentPost === null) return
	const post = state.posts.find(post => post.id === state.currentPost.id)
	
	return {
		//TODO: Load comment
		filtered_comments: 	state.comments.filter(comment => comment.parentId === state.currentPost.id ),
		...post,
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onfetchSinglePostRequest:(post) => {
			dispatch(fetchSinglePostRequest(post))
		},
	}
}

export default PostDetail = connect(mapStateToProps, mapDispatchToProps)(PostDetail)