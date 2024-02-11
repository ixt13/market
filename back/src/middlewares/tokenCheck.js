const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()
const { SECRET_KEY } = process.env

const authenticateToken = (request, response, next) => {
	const token = request.headers['authorization']
	console.log(token)
	if (!token) {
		return response.status(401).send('Unauthorized')
	}

	jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
		if (err) {
			return response.status(403).send('Forbidden')
		}
		request.userID = decodedToken.userID

		next()
	})
}

module.exports = authenticateToken
