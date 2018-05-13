import React from 'react';

export default ({ input }) => {
	return (
		<div className="col s10">
			<nav>
				<div className="nav-wrapper">
					<div className="input-field">
						<input {...input} placeholder="Enter Your City" />
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</div>
			</nav>
		</div>
	);
};
