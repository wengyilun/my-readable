/**
 * Created by mbp on 23/11/2017.
 */
/**
 * Created by mbp on 23/11/2017.
 */
import React, {Component} from 'react'
import TabBar from '../components/TabBar'
import PostList from '../components/PostList'
import PostDetail from './PostDetail'
import {Route, withRouter, Link} from 'react-router-dom'


const Home = ({ match }) => (
		<section className="postContainer">
			<div>Home Page</div>
		</section>
)
export default Home