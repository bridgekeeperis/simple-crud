const express = require('express');
const mongooseDB = require('./db/dbConnection');
const router = require('./routes/v1')

const app = express();

const PORT = 4949

app.listen(PORT,
    console.log('Your Server Running On ',PORT)
)

app.use(express.json())

app.use('/v1',router)

mongooseDB()