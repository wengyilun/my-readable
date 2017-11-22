/**
 * Created by mbp on 28/10/2017.
 */
import React from 'react'

const Nav = () => (
	<div  className="main-nav-container">
		<a className="header__menu">
			<div className="menu_icon contract">menu</div>
		</a>
		<nav className="main-nav hidden">
			<li><a href="/">About</a></li>
			<li><a href="/">Discussion</a></li>
			<li><a href="/">Shelters</a></li>
			<li><a href="/">Donate</a></li>
			<li><a href="/">Contact</a></li>
		</nav>
	</div>
)

export default Nav