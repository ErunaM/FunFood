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
						onSubmit={this.props.handleSubmit(async values => {
							await this.props.fetchCitys(values);
								//console.log(this.props);
							this.props.onCuisineSubmit();
						//	console.log("test");


						}, this.props.onCuisineSubmit
						)}
					>
						<Field type="search" name="searchbar" component={SearchBar} />
						<button
							className="col s2 btn waves-effect waves-light brown darken-1 right"
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

ZomatoCity = reduxForm({
	form: 'ZomatoCity'
})(ZomatoCity);



export default connect(null, actions)(ZomatoCity);
