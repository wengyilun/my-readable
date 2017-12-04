/**
 * Created by mbp on 23/11/2017.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSinglePostRequest} from '../../actions/postActions'
import AddComment from "../../containers/AddComment"
import Comment from "../../components/Comment"
import Voting from '../../components/Voting'
import EditControl from '../../components/EditControl'
import FaCommentO from 'react-icons/lib/fa/comment-o';
import {convertToDate} from '../../utils/helpers'
import ImageInput from '../../utils/ImageInput'
import Loading from 'react-loading'
import {Link} from 'react-router-dom'

class PostDetail extends Component {
	componentWillMount (){
		this.props.onfetchSinglePostRequest(this.props.match.params.postId)
	}
	
	render(){
		const {filtered_comments, deleted, created_datetime, last_edited, voteScore, id, body, title} = this.props
		
		return(
			 voteScore===null
				? <div className="loaderContainer">
				    <Loading type='spin' color='#fff' className='loading' />
				  </div>
				:
			 deleted
				? <div >
				 	<p className="postMessage">This post has been removed</p>
				 </div>
				:
			<div>
				<Link className='closePostDetail' to='/'>Close</Link>
				<main className="postItemBodyMain">
					<div className="authorImageContainer">
						<ImageInput
							className='authorImage'
							name='avatarURL'
							maxHeight={64}
						/>
						<div>
							<div className="postDate">{created_datetime &&  convertToDate(created_datetime)}</div>
							{last_edited > 0 && (<div className="postDate"> Last edited on:{last_edited && convertToDate(last_edited)}</div>)}
							<div className="author">ellen</div>
						</div>
					</div>
					<EditControl {...this.props}/>
					{title}
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
	if( state.currentPost === null) return
	const post = state.posts.find(post => post.id === state.currentPost.id)
	
	return {
		filtered_comments: 	state.comments.filter(comment => comment.parentId === state.currentPost.id ),
		...post,
		deleted: typeof state.currentPost.id === 'undefined',
		errors: state.errors
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