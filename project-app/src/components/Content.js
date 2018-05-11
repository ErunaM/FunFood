import React, { Component } from 'react';

class Content extends Component {
	render() {
		return (
			<div
				className="row flex"
				style={{ padding: '0px', margin: '0px 0px 0px 0px' }}
			>
				<div className="col s4 orange lighten-3 center-align">
					<i className="material-icons large ">laptop_windows</i>
					<h5> Study</h5>
					<p>Alot of study has gone into my project website.. jk </p>
				</div>
				<div className="col s4 teal accent-2 center-align">
					<i className="material-icons large ">lightbulb_outline</i>
					<h5> Ideas </h5>
					<p>
						{' '}
						It will be hard coming up with an idea of why you should hire me
					</p>
				</div>
				<div className="col s4 deep-purple lighten-3 `x` center-align ">
					<i className="material-icons large">monetization_on</i>
					<h5> Money </h5>
					<p> I will potentially make you alot of money</p>
				</div>
			</div>
		);
	}
}

export default Content;
