/**
 * Created by mbp on 28/10/2017.
 */
import React, {Component} from 'react'
import { openModal,searchSubmitted} from '../../actions'
import {connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import './SearchBar.css'

class SearchBar extends Component{
	state = {
		query:''
	}
	handleSearchChanged = (value)=>{
		let v = value.trim()
		this.setState({query: v})
		v.length >= 2
		? this.props.onSearchSubmit(v)
		: this.props.onSearchSubmit('')
	}
	handleSearchKeyPress = (e)=>{
		if(e.key === 'Enter'){
			this.props.onSearchSubmit(this.state.query)
		}
	}
	handleSearchKeyDown =(e)=>{
		if(e.keyCode === 8){
			this.props.onSearchSubmit(this.state.query)
		}else if(e.keyCode === 46){
			this.clearQuery()
		}
	}
	clearQuery=()=>{
		this.setState({query: ''})
		this.props.onSearchSubmit('')
	}
	
	//TODO: add search comments
	render(){
		return(
			<div className="searchBar">
				<div className="searchInputContainer">
					<input className="searchInput" type="text" placeholder="Search Post"
						onChange={(e)=> (this.handleSearchChanged(e.target.value))}
						onKeyPress={(e) => this.handleSearchKeyPress(e)}
						onKeyDown={(e) => this.handleSearchKeyDown(e)}
					/>
				</div>
				<div className="addButton" >
					<a
						onClick={e => {
							e.preventDefault()
							this.props.onAddPostClicked()
						}}>
						Add Post
					</a>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
	
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onAddPostClicked: () => {
			dispatch(openModal({shouldOpen:true, mode:'addPost'}))
		},
		onSearchSubmit: (query)=>{
			dispatch(searchSubmitted(query))
		}
	}
}

SearchBar.propTypes = {
	onAddPostClicked: PropTypes.func.isRequired,
	onSearchSubmit: PropTypes.func.isRequired
}

SearchBar = connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar)


export default SearchBar