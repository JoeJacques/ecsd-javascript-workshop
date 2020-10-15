import express from 'express'; 
import bodyParser from 'body-parser'; 

const router = express.Router(); 

router.get('/cars', (req, res) => { 
    res.send('Hello this is a test')

})

