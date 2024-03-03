const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
	lastName: {
		type: String,
		required: false,
	},
	name: {
		type: String,
		required: false,
	},
	city: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: false,
	},
	avatar: {
		type: String,
		required: false,
	},
	createdAt: {
		type: String,
		required: false,
	},
	reviews: [
		{
			userID: {
				type: String,
				required: true,
			},
			userImg: {
				type: String,
				required: false,
			},
			userEmail: {
				type: String,
				required: false,
			},
			userName: {
				type: String,
				required: false,
			},
			timeStamp: {
				type: String,
				required: true,
			},
			review: {
				type: String,
				required: true,
			},
		},
	],

	items: [
		{
			ID: {
				type: String,
				required: false,
			},
			name: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: false,
			},

			price: {
				type: String,
				required: false,
			},
			city: {
				type: String,
				required: false,
			},
			createdAt: {
				type: String,
				required: false,
			},
			images: [
				{
					photo: {
						type: String,
						required: false,
					},
				},
			],
		},
	],
})

userSchema.pre('save', function (next) {
	if (!this.isModified('password')) {
		return next()
	}

	bcrypt
		.hash(this.password, 10)
		.then(hashedPassword => {
			this.password = hashedPassword
			return next()
		})
		.catch(err => {
			return next(err)
		})
})

module.exports = mongoose.model('User', userSchema)
