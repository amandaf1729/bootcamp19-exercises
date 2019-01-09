const express = require("express");
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/index.html"));
});

app.get("/puppies", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/puppies.html"));
});

app.get("/travel", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/travel.html"));
});

app.get("/memes", (req, res) => {
  res.sendFile(path.join(__dirname + "/view/memes.html"));
});

//

app.listen(3000);
console.log("Running at port 3000");
