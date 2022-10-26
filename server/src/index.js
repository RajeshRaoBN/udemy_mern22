const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

const app = express()
app.use(express.json())
app.use(cors())

const uri = process.env.MONGO_URI
mongoose.connect(uri)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(`No Connection established to Mongo DB due to error ${err}`))

PORT = process.env.PORT || 5500

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => res.status(200).send('<h1>Express server is running</h1>'))

app.listen(PORT, () => console.log(`The server is listning on port ${PORT}`))