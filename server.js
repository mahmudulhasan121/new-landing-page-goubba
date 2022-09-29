const express = require("express");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const PORT = 8082;

const app = express();

app.get("/manifest.json", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "manifest.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

app.get("/asset-manifest.json", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "asset-manifest.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

app.get("/business", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }
    res.send(data);
  });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
