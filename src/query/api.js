import axios from 'axios'
import { API_URL } from '../consts/consts'
const token = localStorage.getItem('token')
const userID = localStorage.getItem('userID')

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

const authentification = async (emailValue, passwordValue) => {
	try {
		const response = await axios.post(`${API_URL}/authUser`, {
			email: emailValue,
			password: passwordValue,
		})
		return response.data
	} catch (error) {
		return error.response.data
	}
}

const checkToken = async () => {
	try {
		const response = await axios.post(`${API_URL}/checkToken/${userID}`, null, {
			headers: { Authorization: token },
		})

		return response.data
	} catch (error) {
		return error
	}
}

const getUserDataById = async id => {
	try {
		const response = axios.get(`${API_URL}/users/${id}`)
		return response
	} catch (error) {
		return error
	}
}

const updateUserInfo = async (name, lastName, city, phone, userId) => {
	try {
		const response = axios.patch(
			`${API_URL}/users/${userId}`,
			{
				lastName: lastName,
				name: name,
				city: city,
				phone: phone,
			},
			{
				headers: { Authorization: token },
			}
		)
		return response
	} catch (error) {
		return error
	}
}

export {
	authentification,
	checkToken,
	getAllPosts,
	getItemById,
	getUserDataById,
	updateUserInfo,
}
