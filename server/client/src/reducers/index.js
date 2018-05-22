import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import zomatoCuisinesReducer from './zomatoCuisinesReducer';

export default combineReducers({
	form: reduxForm,
	zomato: zomatoCuisinesReducer
});
