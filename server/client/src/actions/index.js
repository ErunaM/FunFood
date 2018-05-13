import axios from 'axios';
import { FETCH_CITYS } from './types';

export const fetchCitys = values => async dispatch => {
	const res = await axios.post('/api/city', values);
	dispatch({ type: FETCH_CITYS, payload: res.data });
};
