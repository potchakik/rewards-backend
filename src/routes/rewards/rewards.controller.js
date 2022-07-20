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

async function httpGetAllVideoPoints(req, res) {
  VideoPoints.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
}

async function httpGetAllAudioPoints(req, res) {
  AudioPoints.find((err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
}

async function httpPostCalcualteArticlePoints(req, res) {
  const articleData = req.body;

  const userTimeArr = [];

  userTimeArr.push(articleData.time);

  try {
    await ArticlePoints.findOneAndUpdate(
      { userId: articleData.userId },
      { time: articleData.time, type: articleData.type },
      { upsert: true }
    );

    res
      .status(201)
      .send({ message: "Data successfully saved to the database" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong." });
  }
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
