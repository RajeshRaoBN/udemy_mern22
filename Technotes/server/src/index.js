const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5100

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to Express Server</h1>')
})

app.listen(PORT, () => console.log(`Server is listning on PORT ${PORT}`))