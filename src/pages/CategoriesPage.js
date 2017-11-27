
/**
 * Created by mbp on 26/11/2017.
 */
/**
 * Created by mbp on 23/11/2017.
 */
import React, {Component} from 'react'
import TabBar from '../components/TabBar'
import PostList from '../components/PostList'
import PostDetail from './PostDetail'
import {Route} from 'react-router-dom'
import ModalContainer from '../containers/ModalContainer'


const CategoriesPage = ({ match }) => (
	<div>
		<Route exact path={match.url} render={()=> (
			<section className="postContainer">
				<TabBar/>
				<PostList paramFilter={match.params.category}/>
			</section>
		)}/>
	</div>
)
export default CategoriesPage