import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express()

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => { 
    res.send( 'hello world');
});

// app.put('/', async (req, res) =>  { 
//     res.send(await 'test')
// })

// app.post('/', async (req, res) => {
//     res.send(await 'TEST')
// })

// app.delete('/', async (req, res) => { 
//     res.send(await 'TEST');
// })

app.listen(PORT,() =>  {
    console.log(`API is running on port ${PORT}`)
})
