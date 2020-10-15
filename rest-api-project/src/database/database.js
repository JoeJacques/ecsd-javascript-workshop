const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

let datastore = null 


// Aysnc function that will create a DB

startDB = async () => { 
    const mongo = new MongoMemoryServer();
    const mongoDBURL = await mongo.getUri(); 
    const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true})
    datastore = connection.db();
}

getDB = async () => { 
    if (!datastore) await startDB(); 
    return datastore; 
};

module.exports = { 
    getDB, 
    startDB,
}