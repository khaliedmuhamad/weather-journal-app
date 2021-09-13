// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 3001;
const listening = () =>{
    console.log("lols",port)
};
const server = app.listen(port,listening);
// post to app
const data = []
app.post('/idea',(req,res) =>{
    projectData = req.body;
    //console.log("post func",projectData)
    data.push(projectData)
});
//same url in post client side

//get data from db

app.get('/idea',(req,res) =>{
    console.log(projectData)
    res.send(projectData);
});