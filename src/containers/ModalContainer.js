/**
 * Created by mbp on 28/10/2017.
 */
import { connect } from 'react-redux'
import {openModal} from '../actions'
import React  from 'react'
import AddPost from './AddPost'
import EditPost from './EditPost'
import Modal from 'react-modal'
let ModalContainer = ({mode, shouldOpen, closeModal, currentPost, categoryId, categories}) => {
		return (
			<Modal
				className='modal'
				overlayClassName='overlay'
				isOpen={shouldOpen}
				onRequestClose={closeModal}
				contentLabel='Modal'
			>
				<a className="closeButton" onClick={closeModal}>close</a>
				{mode === 'addPost'
				 ?	<AddPost submit={closeModal} categoryId={categoryId} categories={categories}/>
				 :  <EditPost submit={closeModal} data={currentPost} categories={categories}/>}
			</Modal>
		)
}


function mapStateToProps(state, ownProps){
	return {
		shouldOpen: state.modal.shouldOpen,
		mode: state.modal.mode,
		currentPost: state.currentPost,
		// categoryId: state.categories && state.categories.filter(category => category.name === state.visibilityFilter).id,
		categories: state.categories
	}
}

function mapDispatchToProps(dispatch){
	return {
		closeModal: () => {
			dispatch(openModal(false))
		}
	}
}

export default connect(
mapStateToProps, mapDispatchToProps)
(ModalContainer)