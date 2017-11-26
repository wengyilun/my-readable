/**
 * Created by mbp on 01/10/2017.
 */
// TODO: add pagination

import React, {Component} from 'react'

class Pagination extends Component {
	state={
		itemsPerPage: 10
	}
	
	onChange = (value)=>{
		this.setState({itemsPerPage: value})
		this.props.onPagerChange(value)
	}
	
	render(){
		const {itemsPerPage} = this.state
		const {total, onPagerChange} = this.props
		
		const message = () =>{
			if (total > 0) {
				return `Showing ${itemsPerPage < total ? itemsPerPage : total } of ${total} books`
			} else {
				return 'No book to display'
			}
		}
		
		return(
			<div className="pager-container" >
				<div className="pager-main">
					<div className="pager-menu-label">
						 {message}
					</div>
					<div className="pager-select-wrapper">
						<select name="" id="" className="pager-select" value={itemsPerPage}
								onChange={(event) => this.onChange(event.target.value)}>
							<option value="numPerPage" disabled>Show number of per pages</option>
							<option value="5">Show 5 items</option>
							<option value="10">Show 10 items</option>
							<option value="20">Show 20 items</option>
							<option value="50">Show 50 items</option>
							<option value="100">Show 100 items</option>
							<option value="100000">Show All items</option>
						</select>
					</div>
				</div>
			</div>
		)
	}
}

export default Pagination