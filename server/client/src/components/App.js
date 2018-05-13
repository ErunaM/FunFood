import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import NavBar from './Navbar';
import NewCity from './zomatoCity/NewCity';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<NewCity />
				<a href="/api/city">click</a>
			</div>
		);
	}
}

export default connect(null, actions)(App);
