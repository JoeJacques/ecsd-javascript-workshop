const express = require('express'); 
const cors = require('cors');
const helemet = require('helemt');
const morgan = require('morgan');

const PORT = 3000;
const app = express()

// Temp data store 

const cars = [ 
    {   id: int,
        make: string,
        model: string,
        color: string,
        year: int
    }
]



app.get('/cars', (req, res) => { 
    return res.send('HTTP GET METHOD');
});

app.post('/cars:id', (req, res) => {
    return res.send('POST METHOD');
});

app.put('cars/:id', (req, res) => { 
    return res.send( req.params.id, 'PUT REQUEST');
})

app.delete('cars/:id', (req, res) => {
    res.send(req.params.id, 'DELETE METHOD')
})

app.listen(PORT, () =>  {
    console.log(`APP is running on port ${PORT}`)
})
