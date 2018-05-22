import React, { Component } from 'react';
import { connect } from 'react-redux';

import ZomatoCity from './ZomatoCityForm';
import ZomatoDisplayCuisines from './ZomatoDisplayCuisines';
class NewCity extends Component {
	state = { showCuisines: false};

	render() {
		if(!this.state.showCuisines){	return (
				<div>

					<ZomatoCity onCuisineSubmit={() => this.setState({showCuisines: true})}/>
					{//console.log(this.props)
					}
				</div>
			);}else{
				return (
					<div>

						<ZomatoCity onCuisineSubmit={() => this.setState({showCuisines: true})}/>
						{//console.log(this.props)
						}
						<ZomatoDisplayCuisines />
					</div>
				);
			}

	}
}

export default connect()(NewCity);
