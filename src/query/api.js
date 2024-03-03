import axios from 'axios'
import { API_URL } from '../consts/consts'
import { timeStamp } from '../hooks/getTime'

let token = null
let userID = null

const updateTokenAndUserID = () => {
	token = localStorage.getItem('token')
	userID = localStorage.getItem('userID')
}

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
		updateTokenAndUserID()
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
		const response = await axios.get(`${API_URL}/users/${id}`)
		return response.data
	} catch (error) {
		return error
	}
}

const updateUserInfo = async (name, lastName, city, phone, avatar, userId) => {
	try {
		updateTokenAndUserID()
		const response = await axios.patch(
			`${API_URL}/users/${userId}`,
			{
				lastName: lastName,
				name: name,
				city: city,
				phone: phone,
				avatar: avatar,
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

const updateItemByID = async (
	name,
	description,
	price,
	images,
	itemID,
	userID
) => {
	try {
		updateTokenAndUserID()
		const response = await axios.patch(
			`${API_URL}/item/update/${itemID}`,
			{
				userID: userID,
				name: name,
				description: description,
				price: price,
				images: images,
				createdAt: timeStamp(),
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

const imgbbImageUploader = async imageData => {
	try {
		const response = await axios.post(
			'https://api.imgbb.com/1/upload',
			imageData
		)
		return response
	} catch (error) {
		return error
	}
}
const deleteItemData = async itemID => {
	try {
		updateTokenAndUserID()
		const response = await axios.delete(`${API_URL}/item/${itemID}`, {
			headers: { Authorization: token },
		})
		return response
	} catch (error) {
		return error
	}
}

const setUserReview = async (
	selectedUserId,
	userImg,
	userEmail,
	userName,
	reviewTextContent
) => {
	try {
		updateTokenAndUserID()

		const response = await axios.post(
			`${API_URL}/user/addReview/${selectedUserId}`,
			{
				userID: userID,
				userImg: userImg,
				userEmail: userEmail,
				userName: userName,
				timeStamp: timeStamp(),
				review: reviewTextContent,
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
	deleteItemData,
	getAllPosts,
	getItemById,
	getUserDataById,
	imgbbImageUploader,
	setUserReview,
	updateItemByID,
	updateUserInfo,
}
