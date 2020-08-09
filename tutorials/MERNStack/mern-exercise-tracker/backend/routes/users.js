const router = require('express').Router();//We need the express router because this is a route that we are creating
let User = require('../models/user.model');//This is the mongoose model that we created

//First endpoint that handles incoming HTTP get request
router.route('/').get((req,res)=>{//If the route is localhost:port/users/ and if it's a get request
    User.find()//Mongoose method that will get all the users from the MongoDb Atlas DB. Returns a promise
    .then(users=> res.json(users))//This will take the response and return the users as JSON
    .catch(err=>res.status(400).json('Error: '+err));
});

//Second endpoint handles incoming http POST requests
router.route('/add').post((req,res)=>{
    const username = req.body.username;//This is part of the request Body
    const newUser = new User({username});//Will create a new instance of User using the username

    newUser.save()//The newUser is saved to the DB with this. 
    .then(()=>res.json('User added!')) //After the newUser is saved, we will return the User Added Message
    .catch(err=> res.status(400).json('Error: '+err));
});

module.exports = router;