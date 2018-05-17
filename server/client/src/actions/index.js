import axios from 'axios';
import { FETCH_CITYS } from './types';

export const fetchCitys = values => async dispatch => {
	const k = await axios.post('/api/city', values);
	console.log(k.data.id);
	const res = await axios.post('/api/cuisines', k);
	console.log(res.data);

	dispatch({ type: FETCH_CITYS, payload: res.data });
};
