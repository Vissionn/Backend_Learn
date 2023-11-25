// Setver Instantiate
const express = require("express");
const app = express();

// used to parses req.body inn express --> PUT OR POST 
const bodyParser = require("body-parser");

// Specifically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());

// Activate the Sever at Port 3000
app.listen(3000, () => {
    console.log("Server run at port 3000");
});

// Get Request
app.get("/" , (req,res) => {
    res.send("Hello everyone");
})

// Post Request

app.post("/cars" , (req,res) => {
    const {name , brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully");
})

const  MongoClient = require("mongoose")

MongoClient.connect("mongodb://localhost:27017/myDatabase" , {
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true 
})
.then( () => {console.log("Connection Successful")})
.catch( (error) => {console.log("Recieved an Error")})
