import axios from 'axios';
import { FETCH_CITYS } from './types';

export const fetchCitys = values => async dispatch => {
	const k = await axios.post('/api/city', values);
	//console.log(k.data.id);
	const res = await axios.post('/api/cuisines', k);
//	console.log(res.data);
	//var randomItem = temp[Math.floor(Math.random()*temp.length)]; // gets me a random item
	//console.log(randomItem);

	dispatch({ type: FETCH_CITYS, payload: res.data });
};
