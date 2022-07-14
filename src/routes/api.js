const express = require("express");

const userPoints = require("./rewards/rewards.router");

const api = express.Router();

api.use("/rewards", userPoints);

module.exports = api;
