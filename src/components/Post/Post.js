/**
 * Created by mbp on 28/10/2017.
 */
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaTrash from 'react-icons/lib/fa/trash';
import FaEdit from 'react-icons/lib/fa/edit';
import {openModal} from '../../actions'
import {onDeletePost, onViewPostDetail, onEditPost} from '../../actions/postActions'
import {Link} from 'react-router-dom'
import EditPost from "../../containers/EditPost"
import Voting from '../Voting'
import {convertToDate} from '../../utils/helpers'

let Post = ({dispatch, data, id, title, body, filtered_comments, category_id, voteScore, created_datetime, last_edited}) => (
	<div className="postItem">
		<aside className="postItemAuthor">
			<div className="authorImage"/>
		
			<div className="authorNameContainer">
				<div className="authorName">by Author</div>
				<span className="postDate">{convertToDate(created_datetime)}</span>
				{last_edited > 0 && ( <span className="postDate"> Last edited on:{convertToDate(last_edited)}</span>)}
			</div>
			<nav className="postControl">
				<FaEdit className="editButton" size={22}
						onClick={ e => {
							e.preventDefault()
							dispatch(openModal({shouldOpen:true, component:EditPost}))
							dispatch(onEditPost({id, title, body, category_id, created_datetime}))
						}}/>
				<FaTrash className="deleteButton" size={20}
						 onClick={e => {
							 e.preventDefault()
							 dispatch(onDeletePost(id))
						 }}/>
			</nav>
		</aside>
		<article className="postItemBody">
			
			<main className="postItemBodyMain" onClick={(e) => {
				e.preventDefault()
				dispatch(onViewPostDetail(data))
			}}>
				
				<Link to={`/posts/${id}`}>{title}</Link>
			
				<p>{body}</p>
				<footer>
					<div className="comment">{filtered_comments && filtered_comments.length} comment <FaCommentO size="20"/></div>
					<Voting voteScore={voteScore} type="post" id={id}/>
				</footer>
			</main>
		</article>
	</div>
)

const mapStateToProps = (state, ownProps) => {
	return {
		filtered_comments: 	state.comments.filter(comment => comment.parentId === ownProps.id ),
		data: {...ownProps}
	}
}

Post.PropTypes = {
	onClick: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	onDeletePost: PropTypes.func.isRequired,
}

export default  Post = connect(mapStateToProps, null)(Post)