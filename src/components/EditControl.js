/**
 * Created by mbp on 03/12/2017.
 */
import {connect} from 'react-redux'
import React from 'react'
import FaEdit from 'react-icons/lib/fa/edit';
import {openModal} from '../actions'
import {onEditPost} from '../actions/postActions'
import EditPost from "../containers/EditPost"

let EditControl = ({dispatch, ...props}) => (
	<nav className="postControl">
		<FaEdit className="editButton" size={22}
				onClick={ e => {
					e.preventDefault()
					dispatch(openModal({shouldOpen:true, component:EditPost}))
					dispatch(onEditPost({...props}))
				}}/>
	</nav>
)
export default EditControl = connect()(EditControl)
