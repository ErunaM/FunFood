import React, { Component } from 'react';
import { connect } from 'react-redux';

import ZomatoCity from './ZomatoCityForm';

class NewCity extends Component {
	render() {
		return (
			<div>
				<ZomatoCity />
			</div>
		);
	}
}

export default connect()(NewCity);
