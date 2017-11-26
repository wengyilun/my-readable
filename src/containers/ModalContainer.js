/**
 * Created by mbp on 28/10/2017.
 */
import { connect } from 'react-redux'
import {openModal} from '../actions'
import React  from 'react'

import Modal from 'react-modal'
let ModalContainer = ({Component, shouldOpen, closeModal, data}) => {
		return (
			<Modal
				className='modal'
				overlayClassName='overlay'
				isOpen={shouldOpen}
				onRequestClose={closeModal}
				contentLabel='Modal'
			>
				<a className="closeButton" onClick={closeModal}>close</a>
				<Component submit={closeModal} {...data}/>
			</Modal>
		)
}


function mapStateToProps(state, ownProps){
	return {
		shouldOpen: state.modal.shouldOpen,
		Component: state.modal.component,
		data:{
			currentPost: state.currentPost,
			// categoryId: state.categories && state.categories.filter(category => category.name === state.visibilityFilter).id,
			categories: state.categories
		}
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