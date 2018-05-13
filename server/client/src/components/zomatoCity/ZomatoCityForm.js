import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import SearchBar from './Searchbar';

class ZomatoCity extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<form
						onSubmit={this.props.handleSubmit(values =>
							this.props.fetchCitys(values)
						)}
					>
						<Field type="search" name="searchbar" component={SearchBar} />
						<button
							className="col s2 btn waves-effect waves-light right"
							type="submit"
							name="action"
						>
							Submit
							<i className="material-icons right">send</i>
						</button>
					</form>
				</div>
			</div>
		);
	}
}
function validate(values) {
	console.log(values);
}
ZomatoCity = reduxForm({
	validate,
	form: 'ZomatoCity'
})(ZomatoCity);

export default connect(null, actions)(ZomatoCity);
