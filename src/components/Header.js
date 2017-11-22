/**
 * Created by mbp on 28/10/2017.
 */
import React from 'react'
import SearchBar from './SearchBar'


const Header = () => (
	<div>
		<header className="headerBar">
			<div className="logoBar">
				<h3 className="logo">Mougogo</h3>
				<div className="tagline">The animal guardian</div>
			</div>
			<nav className="loginBar">
				<a href="/#login">Login</a> |
				<a href="/#login"> Sign up</a>
			</nav>
		</header>
		<SearchBar />
		<section className="bannerBar">
			<div className="banner"/>
		</section>
	</div>
)

export default Header