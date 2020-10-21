const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const carRouter = require('./routes/cars-routes'); 
const mongoose = require('mongoose')
const dbConfig = require('../src/data/database.config.js')

const PORT = 3000;
const app = express()
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors());

// Connecting to the database

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('../src/routes/cars-routes.js') (app)

app.listen(PORT,() =>  {
    console.log(`API is running on port ${PORT}`)
})

