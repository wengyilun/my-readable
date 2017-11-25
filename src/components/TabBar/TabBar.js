/**
 * Created by mbp on 28/10/2017.
 */
import React from 'react'
import Tab from '../Tab'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './TabBar.css'

let TabBar = ({categories}) => (
	<nav className="tabBar">
		{categories && categories.map((category) => (
			<Tab name={category.name} filter={category.name}/>
		))}
	</nav>
)

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	
	}
}


TabBar.propTypes = {
	categories: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired
		}).isRequired
	).isRequired
}


export default TabBar = connect(
	mapStateToProps,
	null
)(TabBar)
