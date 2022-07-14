const express = require("express");
const {
  httpGetAllArticlePoints,
  httpGetAllAudioPoints,
  httpGetAllVideoPoints,
  httpPostCalcualteArticlePoints,
} = require("./rewards.controller");

const userRewardsRouter = express.Router();

userRewardsRouter.get("/all/articlePoints", httpGetAllArticlePoints);
userRewardsRouter.get("/all/audioPoints", httpGetAllAudioPoints);
userRewardsRouter.get("/all/videoPoints", httpGetAllVideoPoints);
userRewardsRouter.post("/articlePoints", httpPostCalcualteArticlePoints);
userRewardsRouter.post("/audioPoints", httpPostCalcualteArticlePoints);
userRewardsRouter.post("/videoPoints", httpPostCalcualteArticlePoints);

module.exports = userRewardsRouter;
