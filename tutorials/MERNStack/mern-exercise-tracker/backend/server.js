const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose'); // So that we can use mongoose to connect to mongoDB Atlas 

require('dotenv').config();//So that we can have our environment variables in the .env file

const app = express(); // This is how we are going to create our express server
const port = process.env.PORT || 5000; //Port that the server will be on

app.use(cors()); // cors middleware
app.use(express.json()); // allows us to parse JSON as the server is going to be sending and receiving JSON

const uri = process.env.ATLAS_URI;// Db's URI. Something that we have to get from the MongoDBAtlas Dashboard
mongoose.connect(uri,//This is where our Database is stored. Mongoose.connect is how we start our connection
    {useNewUrlParser: true,  useCreateIndex: true});// These 2 flags are basically added to handle MongoDB updates
const connection =  mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
});//This is basically executed once the connection is open

//Informing the server to use the following route files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);// IF a user goes to the /exercise route, we will load everything that is there in exercisesRouter
app.use('/users', usersRouter);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});//This is what starts the server. It starts listening on a certain port