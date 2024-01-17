const express = require("express");

const app = express();

//There seems to be a problem with this route's logic.
//Everytime I go to http://localhost:8080/html there is an error or it's just not working
//I want to send a html page but the response param is not doing it's job.
//Can you figure out why and fix it?
app.get("/html", function (req, res) {
  res.sendFile(__dirname + "index.html");
});

//Create a route that sends a list of Places to the client as json
const places = [
  {
    name: "Marky's Place",
    address: "123 Main St",
  },
];

app.listen(function () {
  console.log("Server is listening at http://localhost:8080");
});
