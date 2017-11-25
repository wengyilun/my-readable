/**
 * Created by mbp on 28/10/2017.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
	state = {
		showNav: false
	}
	toggleNav = (e)=>{
		e.preventDefault()
		this.setState({showNav: !this.state.showNav})
	}
	
	render(){
		const {showNav} = this.state
		return(
			<div className="main-nav-container">
				<a className="header__menu"
				   onClick={(e)=> {this.toggleNav(e)}}>
					<div className="menu_icon contract">
					menu</div>
				</a>
				{/*<a className="header__menu menu_icon">*/}
					{/*onClick={e => {*/}
						{/*e.preventDefault()*/}
					    {/*this.toggleNav(e)*/}
					{/*}}>*/}
					{/*menu*/}
				{/*</a>*/}
				<nav className={`main-nav ${showNav ? "visible" : "hidden"}`}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/posts">Discussion</Link></li>
					<li><Link to="/shelters">Shelters</Link></li>
					<li><Link to="/donate">Donate</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</nav>
			</div>
		)
	}
}

export default Nav