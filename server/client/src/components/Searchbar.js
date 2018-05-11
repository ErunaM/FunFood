import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<div className="container">
				<nav>
					<div className="nav-wrapper">
						<form>
							<div className="input-field">
								<input
									id="search"
									type="search"
									placeholder="Enter Your City"
									required
								/>
								<label className="label-icon" for="search">
									<i className="material-icons">search</i>
								</label>
								<i className="material-icons">close</i>
							</div>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

export default SearchBar;
