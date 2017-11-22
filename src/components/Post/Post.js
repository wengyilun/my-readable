/**
 * Created by mbp on 28/10/2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';
import {onDeletePost, editPost, openModal, updatePostVote, onEditPost} from '../../actions'
import Comment from '../Comment'
import AddComment from "../../containers/AddComment"
import Voting from '../Voting'
import {convertToDate} from '../../utils/helpers'


let Post = ({dispatch, id, title, body, filtered_comments, category_id, voteScore, created_datetime, last_edited}) => (
	<div className="postItem">
		<aside className="postItemAuthor">
			<div className="authorImage"/>
			<div className="authorName">by Author</div>
		</aside>
		<article className="postItemBody">
			<nav className="postControl">
		
				<FaEdit className="editButton" size={22}
						onClick={ e => {
							e.preventDefault()
							dispatch(openModal({shouldOpen:true, mode:'editPost'}))
							dispatch(onEditPost({id, title, body, category_id, created_datetime}))
						}}/>
				<FaTrash className="deleteButton" size={20}
						onClick={e => {
							e.preventDefault()
							dispatch(onDeletePost(id))
						}}/>
			</nav>
			<main className="postItemBodyMain">
				<header>{title}</header>
				<div><span className="postDate">{convertToDate(created_datetime)}</span>
					{last_edited > 0 && (
					     <span className="postDate"> Last edited on:{convertToDate(last_edited)}</span>)}
					 </div>
				<p>{body}</p>
				<footer>
					<div className="comment">{filtered_comments && filtered_comments.length} comment <FaCommentO size="20"/></div>
					<Voting voteScore={voteScore} type="post" id={id}/>
				</footer>
			</main>
			<div className="commentList">
				<AddComment parentId={id} />
				<div>
					<ul>
						{filtered_comments && filtered_comments.map(comment => (
							<Comment {...comment}/>
						))}
					</ul>
				</div>
			</div>
		</article>
	</div>
)

const mapStateToProps = (state, ownProps) => {
	return {
		filtered_comments: 	state.comments.filter(comment => comment.parentId === ownProps.id ),

	}
}

// const mapDispatchToProps = (dispatch, ownProps) => {
// 	return {
// 		 // onOpenMoal: dispatch(deletePost(ownProps.id))
// 	}
// }
Post.PropTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	onDeletePost: PropTypes.func.isRequired,
	
}


Post = connect(mapStateToProps, null)(Post)
export default Post