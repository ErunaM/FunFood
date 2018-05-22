import React, { Component } from 'react';
import { connect } from 'react-redux';


class ZomatoDisplayCuisines extends Component{
  displayCuisines(){

      var temp = this.props.cuisines.cuisines;
    //  console.log(temp);
      var { cuisine } = temp[Math.floor(Math.random()*temp.length)]; // gets me a random item
      console.log(cuisine.cuisine_name);
    return cuisine.cuisine_name;
  }

  render(){
    return (
      <div>
        {this.displayCuisines()}
      </div>
    );
  }

}

function mapStateToProps(state) {
	return {
		formValues: state.form.ZomatoCity.values,
    cuisines: state.zomato
	};
}
export default connect(mapStateToProps)(ZomatoDisplayCuisines);
