const audio = require("./audio.mongo");

async function getAudioCalculatedPoints() {
  return await rewardPoints.find({}, { _id: 0, __V: 0 });
}

async function addCalculatedPoints(points) {
  console.log("points", points);
}

module.exports = {
  getAudioCalculatedPoints,
  addCalculatedPoints,
};
