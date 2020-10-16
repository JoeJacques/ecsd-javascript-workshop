import config from './config.js'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise; 

// Connect to the DB

mongoose.connect(config.Url, { 
    useNewUrlParser: true
})
.then (() => {
    console.log('CONNECTED THE THE DATASTORE')
}).catch(err => { 
    console.log('COULDN\'T CONNECT EXITING...', err)
    process.exit();
})
