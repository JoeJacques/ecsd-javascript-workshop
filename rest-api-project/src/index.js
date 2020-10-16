import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import carRouter from './routes/cars-routes.js';

const PORT = 3000;
const app = express()

app.use('/cars', carRouter)
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { 
    res.send( 'hello world');
})

app.put('/', (req, res) => { 
    res.send('PUT TEST')
})

app.post('/', (req, res) => {
    res.send('POST ROUTE')

})

app.delete('/', (req, res) => { 
    res.send('DELETE TEST')
})


app.listen(PORT,() =>  {
    console.log(`API is running on port ${PORT}`)
})
