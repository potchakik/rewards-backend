const { addCalculatedPoints } = require("../../models/rewards.model");
const { rewards } = require("../../models/rewards.mongo");

async function httpGetAllArticlePoints(req, res) {
  return res.send("Article Points");
}
async function httpGetAllVideoPoints(req, res) {
  return res.send("Video Points");
}
async function httpGetAllAudioPoints(req, res) {
  return res.send("Audio Points");
}

async function httpPostCalcualteArticlePoints(req, res) {
  const articleTime = req.body;

  console.log(articleTime);
  //  let totalPoints = {
  //    videoPoints: 0,
  //    audioPoints: 0,
  //  };
  //  if (time.videoTime === time.videoDuration) {
  //    console.log("videoPoints", 5);
  //    totalPoints["videoPoints"] = 5;
  //  }
  //  if (time.audioTime === time.audioDuration) {
  //    console.log("audioPoints", 5);
  //    totalPoints["audioPoints"] = 5;
  //  }
  //  totalPoints["userId"] = time.userId;
  //  await addCalculatedPoints(totalPoints);

  return res.status(201).json(articleTime);
}

async function httpPostCalculateAudioPoints(req, res) {
  const videoTime = req.body;
  console.log(videoTime);
}

async function httpPostCalculateVideoPoints(req, res) {
  const audioTime = req.body;
  console.log(audioTime);
}

module.exports = {
  httpGetAllArticlePoints,
  httpGetAllAudioPoints,
  httpGetAllVideoPoints,
  httpPostCalcualteArticlePoints,
  httpPostCalculateAudioPoints,
  httpPostCalculateVideoPoints,
};
