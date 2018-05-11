import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import NavBar from './navbar.js';
import Footer from './footer.js';
import Content from './Content.js';

class App extends Component {
	render() {
		return (
			<div>
				<body>
					<NavBar />
					<main style={{ padding: '0px', margin: '0px 0px 0px 0px' }}>
						<Content />
					</main>
					<Footer />
				</body>
			</div>
		);
	}
}

export default App;
