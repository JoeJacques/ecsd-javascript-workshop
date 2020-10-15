// Schema that will be used in the future. 
const {getDB}  = require('./mongo');

const data = 'cars'; 

insertCar = async (car) => { 
    const datastore = await getDB(); 
    const { c} = await datastore.data(dataName).insertOne(car)
    return id
} 

getCar = async () => { 
    const datastore = await getDB(); 
    return await datastore.data(dataName).find({}).toArray(); 
}


module.exports = { 
    insertCar,
    getCar
}; 

