import axios from 'axios'
import { API_URL } from '../consts/consts'

const getAllPosts = async () => {
	try {
		const response = await axios.get(`${API_URL}/getAllItems`)
		return response.data
	} catch (error) {
		throw error
	}
}
const getItemById = async id => {
	try {
		const response = await axios.get(`${API_URL}/getItem/${id}`)
		return response.data
	} catch (error) {
		throw error
	}
}

export { getAllPosts, getItemById }
