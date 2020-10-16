const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const carRouter = require('./routes/cars-routes'); 
const mongoose = require('mongoose')
const dbConfig = require('../src/data/database.config')

const PORT = 3000;
const app = express()
mongoose.Promise = global.Promise;

// app.use('/cars', carRouter)
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

app.get('/', (req, res) => { 
    res.json( {'id': 1, 'make': 'ford', 'model': 'GT 500', 'year': 2001, 'color': 'red'});
})

// app.put('/', (req, res) => { 
//     res.send('PUT TEST')
// })

// app.post('/', (req, res) => {
//     res.send('POST ROUTE')

// })

// app.delete('/', (req, res) => { 
//     res.send('DELETE TEST')
// })


app.listen(PORT,() =>  {
    console.log(`API is running on port ${PORT}`)
})

