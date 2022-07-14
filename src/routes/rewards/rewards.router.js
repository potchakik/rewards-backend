const express = require("express");
const {
  httpGetAllArticlePoints,
  httpGetAllAudioPoints,
  httpGetAllVideoPoints,
  httpPostCalcualteArticlePoints,
  httpPostCalculateAudioPoints,
  httpPostCalculateVideoPoints,
} = require("./rewards.controller");

const userRewardsRouter = express.Router();

userRewardsRouter.get("/all/articlePoints", httpGetAllArticlePoints);
userRewardsRouter.get("/all/audioPoints", httpGetAllAudioPoints);
userRewardsRouter.get("/all/videoPoints", httpGetAllVideoPoints);
userRewardsRouter.post("/articlePoints", httpPostCalcualteArticlePoints);
userRewardsRouter.post("/audioPoints", httpPostCalculateAudioPoints);
userRewardsRouter.post("/videoPoints", httpPostCalculateVideoPoints);

module.exports = userRewardsRouter;
