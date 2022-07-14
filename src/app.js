const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const api = require("./routes/api");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use("/v1", api);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
