module.exports = (app) => {
    const cars = require('../controllers/car.controller.js');

app.get('/', cars.findAll)
app.get('/cars:id', cars.findOne)
app.put('/cars:id', cars.update)
app.post('/cars', cars.create)
app.delete('/cars', cars.delete)

}

