/**
 * Created by mbp on 23/11/2017.
 */
import React, {Component} from 'react'
import TabBar from '../components/TabBar'
import PostList from '../components/PostList'
import PostDetail from './PostDetail'
import {Route} from 'react-router-dom'
import ModalContainer from '../containers/ModalContainer'


const Posts = ({ match }) => (
		<div>
			<ModalContainer/>
			<Route path={`${match.url}/:postId`} component={PostDetail}/>
			<Route exact path={match.url} render={()=> (
				<section className="postContainer">
					<TabBar/>
					<PostList />
				</section>
			)}/>
		</div>
)
export default Posts