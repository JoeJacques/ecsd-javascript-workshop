import express from 'express'; 
import bodyParser from 'body-parser'; 



const router = express.Router(); 

router.get('/', (req, res) => { 
    res.json({'id': 1, 'make': 'ford', 'model': 'GT 500', 'year': 2001, 'color': 'red'})
})

router.put('/', (req,res) => { 
    res.send('test')
})

router.post('/', (req, res) => {
    res.send('TESTING')

})

router.delete('/', (req, res) => { 
    res.send('testing delete')

})


export default router; 