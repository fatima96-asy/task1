const express = require('express')
require('./db/mongoos')
const bookRoutes=require('./routes/books')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(bookRoutes)

app.listen(port)