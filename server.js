// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require("body-parser");
/*Middleware*/ 

// Here we are configuring express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup the server
const port = 5000;
const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

// Capture weather data (Get Route I)
app.get('/all',getData);

function getData(req,res) {
  res.send(projectData);
  projectData=[];
}

// Post weather data
app.post('/projectData', addEntry)

function addEntry(req,res){

    newEntry = {
      date: req.body.date,
      temperature: req.body.temperature,
      comments: req.body.comments
    }
  
    projectData.push(newEntry)
    console.log(addEntry)
  }