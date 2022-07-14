const AudioPoints = require("../../models/audio/audio.mongo");
const VideoPoints = require("../../models/video/video.mongo");
const ArticlePoints = require("../../models/article/article.mongo");

async function httpGetAllArticlePoints(req, res) {
  ArticlePoints.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
}
async function httpGetAllVideoPoints(req, res) {}

async function httpGetAllAudioPoints(req, res) {
  AudioPoints.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
}

async function httpPostCalcualteArticlePoints(req, res) {
  const articleTime = req.body;
  console.log(articleTime);
  let points = Math.floor(articleTime.time / 60);

  let data = {
    type: articleTime.type,
    points: points,
  };

  const result = new ArticlePoints(data);
  result
    .save()
    .then((data) => {
      res.send("item saved to database");
    })
    .catch((err) => console.log(err));
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
