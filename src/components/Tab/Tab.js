/**
 * Created by mbp on 28/10/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {capitalize} from '../../utils/helpers'
import {setVisibilityFilter} from '../../actions'
import {connect} from 'react-redux'
import './Tab.css'
let Tab = ({active, name, filter, count, onTabClick}) => {
	let labelClass = `tab-${name}`
	if (active) {
		labelClass =  `tab-${name}-active`
	}

	return (
		<a className="tabButton" href={`/${name}` }
		   onClick={e => {
			   e.preventDefault()
			   onTabClick()
		   }}>
			<input type="radio"  name="tab"
			/>
			<label htmlFor={name} className={labelClass}>
				{capitalize(name)} 
			</label>
			
		</a>
	)
}
const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter,
		count: state.posts.length
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onTabClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

Tab.propTypes = {
	active: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	onTabClick: PropTypes.func.isRequired
}

Tab = connect(
	mapStateToProps,
	mapDispatchToProps
)(Tab)

export default Tab