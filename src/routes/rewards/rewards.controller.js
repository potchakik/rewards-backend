//const {
//  addCalculatedPoints,
//  getAllRewards,
//} = require("../../models/audio/audio.model");
const AudioPoints = require("../../models/audio/audio.mongo");
const VideoPoints = require("../../models/video/video.mongo");

async function httpGetAllArticlePoints(req, res) {
  return res.send("Article Points");
}
async function httpGetAllVideoPoints(req, res) {}

async function httpGetAllAudioPoints(req, res) {
  AudioPoints.find((err, audio) => {
    if (err) {
      res.send(err);
    }
    res.json(audio);
  });
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

async function httpPostCalculateVideoPoints(req, res) {
  const videoTime = new VideoPoints(req.body);
  videoTime
    .save()
    .then((data) => {
      console.log("audio", data);
      res.send("item saved to database");
    })
    .catch((err) => console.log(err));
}

async function httpPostCalculateAudioPoints(req, res) {
  const audioTime = new AudioPoints(req.body);

  audioTime
    .save()
    .then((data) => {
      console.log("audio", data);
      res.send("item saved to database");
    })
    .catch((err) => console.log(err));

  //  return res.status(201).json(audioTime);
}

module.exports = {
  httpGetAllArticlePoints,
  httpGetAllAudioPoints,
  httpGetAllVideoPoints,
  httpPostCalcualteArticlePoints,
  httpPostCalculateAudioPoints,
  httpPostCalculateVideoPoints,
};
