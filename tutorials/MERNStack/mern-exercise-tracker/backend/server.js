const express = require('express');
const cors =  require('cors');

require('dotenv').config();//So that we can have our environment variables in the .env file

const app = express(); // This is how we are going to create our express server
const port = process.env.PORT || 5000; //Port that the server will be on

app.use(cors()); // cors middleware
app.use(express.json()); // allows us to parse JSON as the server is going to be sending and receiving JSON

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});//This is what starts the server. It starts listening on a certain port