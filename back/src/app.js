const express = require('express')
const dotenv = require('dotenv')
const userRouter = require('./routes/users')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

dotenv.config()
const { PORT, API_URL, MONGO_URL } = process.env

mongoose.connect(MONGO_URL, { bufferCommands: false })
const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))

app.use(userRouter)

app.listen(PORT, () => {
	console.log(`Server run on port ${API_URL}:${PORT}`)
})
