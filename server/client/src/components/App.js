import React, { Component } from 'react';

import NavBar from './Navbar';
import SearchBar from './Searchbar';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<SearchBar />
			</div>
		);
	}
}

export default App;
