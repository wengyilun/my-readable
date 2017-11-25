import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import mougogoApp from './reducers';
import {Provider} from 'react-redux';
import {BrowserRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk';
import PostList from './components/PostList';
import Post from './components/Post';
// import logger from 'redux-logger'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
	mougogoApp,
	composeEnhancers(
		applyMiddleware( thunk)
	)
)

ReactDOM.render(
	<Provider store ={store}>
	 	<BrowserRouter><App /></BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
