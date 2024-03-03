const User = require('../models/user')

const dotenv = require('dotenv')
dotenv.config()
const { SECRET_KEY } = process.env
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//get all users data
const getUsersData = (request, response) => {
	User.find({})
		.then(data => {
			response.status(200).send(data)
		})
		.catch(err => {
			response.status(404).send(err)
		})
}

//get user with ID
const getUser = (request, response) => {
	const { userID } = request.params
	User.findById(userID)
		.then(user => {
			response.status(200).send(user)
		})
		.catch(error => {
			response.status(400).send(error)
		})
}

// get all items
const getAllItems = (request, response) => {
	User.find({})
		.then(data => {
			const result = data.flatMap(user => user.items)
			response.status(200).send(result)
		})
		.catch(error => {
			response.status(404).send(error)
		})
}
//get Item with ID
const getItemById = (request, response) => {
	const { itemID } = request.params

	User.findOne({ 'items._id': itemID })
		.then(user => {
			if (user) {
				const searchedItem = user.items.find(
					element => element._id.toString() === itemID
				)

				if (searchedItem) {
					response.status(200).send(searchedItem)

					return
				}
				response.status(404).send('element is not found')
			}
		})
		.catch(error => {
			response.status(404).send('user not found')
		})
}

//create new user
const createUser = (request, response) => {
	const userData = request.body
	const newUser = new User(userData)

	User.findOne({ email: userData.email })
		.then(existingUser => {
			if (existingUser) {
				response
					.status(200)
					.send(`User with email: ${existingUser.email} already exists`)
			} else {
				newUser
					.save()
					.then(savedUser => {
						response.status(201).send('User saved')
					})
					.catch(error => {
						response.status(500).send(error)
					})
			}
		})
		.catch(error => {
			response.status(500).send(error)
		})
}

//logIn
const logIn = (request, response) => {
	const { email, password } = request.body

	User.findOne({ email }) // Поиск пользователя по email
		.then(user => {
			// Если пользователь найден, user будет объектом пользователя
			if (!user) {
				// Если пользователя нет, отправляем сообщение об ошибке
				return response
					.status(404)
					.send('Пользователь с таким email не существует')
			}

			// Если пользователь найден, сравниваем введенный пароль с хешем из базы данных
			bcrypt
				.compare(password, user.password)
				.then(isPasswordMatch => {
					if (isPasswordMatch) {
						// Если пароль совпадает, создаем токен
						const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
							expiresIn: '1h',
						})

						response
							.status(200)
							.send({ email: user.email, tokenValue: token, ID: user._id }) // Отправляем токен в ответе
					} else {
						response.status(401).send('Неверный пароль') // Если пароль неверный
					}
				})
				.catch(error => {
					response
						.status(500)
						.send('Ошибка при сравнении паролей: ' + error.message)
				})
		})
		.catch(error => {
			response
				.status(500)
				.send('Ошибка при поиске пользователя: ' + error.message)
		})
}

//update Posts by ID
const updatePosts = (request, response) => {
	const { userID } = request.params

	User.findById(userID)
		.then(user => {
			if (!user) {
				return response.status(404).send('User not found')
			}

			user.items.push(request.body)
			console.log(request.body.images)

			user
				.save()
				.then(savedUser => {
					response.status(200).send(savedUser)
				})
				.catch(saveError => {
					response.status(500).send(saveError.message)
				})
		})
		.catch(error => {
			response.status(500).send(error.message)
		})
}
//update user by iD
const updateUser = (request, response) => {
	const { userID } = request.params
	User.findByIdAndUpdate(userID, { ...request.body })
		.then(user => {
			if (!user) {
				return response.status(404).send('User not found')
			}
			response.status(200).send(user)
		})
		.catch(error => {
			response.status(500).send(error.message)
		})
}

const deleteUser = (request, response) => {
	const { userID } = request.params
	User.findByIdAndDelete(userID)
		.then(user => {
			if (!user) {
				return response.status(404).send('User not found')
			}
			response.status(200).send('Deleted')
		})
		.catch(error => {
			response.status(500).send(error.message)
		})
}

const deteteItemPhoto = (request, response) => {
	const { itemPhotoID } = request.params
	console.log(itemPhotoID)
	User.updateOne(
		{ 'items.images._id': itemPhotoID },
		{ $pull: { 'items.$[].images': { _id: itemPhotoID } } }
	)
		.then(result => {
			if (result.nModified === 0) {
				return response.status(404).send('Photo not found')
			}
			response.status(200).send('Deleted')
		})
		.catch(error => {
			response.status(500).send(error.message)
		})
}

const deleteItem = (request, response) => {
	const { itemID } = request.params
	console.log(itemID)
	User.updateOne({ 'items._id': itemID }, { $pull: { items: { _id: itemID } } })
		.then(result => {
			if (result.nModified === 0) {
				return response.status(404).send('Photo not found')
			}
			response.status(200).send('Deleted')
		})
		.catch(error => {
			response.status(500).send(error.message)
		})
}

const checktoken = (request, response) => {
	response.status(200).send('Token Is Valid')
}

const updateItemByID = (request, response) => {
	const { itemID } = request.params
	const { name, description, price, images, userID, createdAt } = request.body
	User.findOneAndUpdate(
		{ 'items._id': itemID },
		{
			$set: {
				'items.$': {
					ID: userID,
					name: name,
					description: description,
					price: price,
					createdAt: createdAt,
					images: images,
					_id: itemID,
				},
			},
		}
	)
		.then(item => {
			if (!item) {
				return response.status(404).send('Item not found')
			}
			console.log(images)
			response.status(200).send(item)
		})
		.catch(error => {
			response.status(500).send(error.message)
		})
}

const addReview = (request, response) => {
	const { userID } = request.params

	User.findById(userID)
		.then(user => {
			if (!user) {
				return response.status(404).send('User not found')
			}

			user.reviews.push(request.body)
			user
				.save()
				.then(savedUser => {
					response.status(200).send(savedUser)
				})
				.catch(error => {
					response.status(404).send('user dont saved')
				})
		})
		.catch(error => {
			response.status(500).send(error.message)
		})
}

module.exports = {
	logIn,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	getUsersData,
	updatePosts,
	getItemById,
	getAllItems,
	checktoken,
	deteteItemPhoto,
	deleteItem,
	updateItemByID,
	addReview,
}
