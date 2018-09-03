import axios from 'axios';

export const get_items = () => async dispatch => {
	const res = await axios.get('http://localhost:5000/api/items');
	console.log(res.data);
	dispatch({
		type: 'GET_ITEMS',
		payload: res.data
	})
}

export const delete_item = (id) => async dispatch => {
	await axios.delete(`http://localhost:5000/api/items/${id}`)
	dispatch({
		type: 'DELETE_ITEM',
		payload: id
	})
}

export const add_item = (newItem) => async dispatch => {
	const res = await axios.post('http://localhost:5000/api/items', newItem)
	console.log(res.data);
	dispatch({
		type: 'ADD_ITEM',
		payload: res.data
	})
}