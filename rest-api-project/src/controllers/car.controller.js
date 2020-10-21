const { uuid } = require('uuidv4')
const Car = require('../data/models/cars.schema')

exports.create = (req, res) => {
    if(!req.body.content) {
        return status(400).send({
            message: 'The request cannot be empty'
        })
    }
const car = new Car({
    id: req.body.id,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    colour: req.body.colour
})

car.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || 'A error was made while creating the car', err
        })
    })



exports.findOne = (req, res) => { 

    Car.findById(req.params.id)
    .then(car => {
        if(!car) {
            return res.status(404).send({
                message: "car not found with id " + req.params.id
            });            
        }
        res.send(car);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Car not found" + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving car with id" + req.params.id
        });
    });
}


exports.findAll = (req, res) => {
    Car.find()
    .then(notes => {
        res.send(cars);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cars."
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "car cannot be empty"
        });
    }


    Car.findByIdAndUpdate(req.params.id, {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year, 
        colour: req.body.colour
    }, {new: true})
    .then(note => {
        if(!car) {
            return res.status(404).send({
                message: "car not found with id" + req.params.id
            });
        }
        res.send(car);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Car not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating car with id " + req.params.noteId
        });
    });
};

exports.delete = (req, res) => {
    Car.findByIdAndRemove(req.params.id)
    .then(car => {
        if(!car) {
            return res.status(404).send({
                message: "car not found with id " + req.params.id
            });
        }
        res.send({message: "car deleted!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "car not found with id" + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete car with id" + req.params.id
        });
    });
};

}
