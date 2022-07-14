//const rewardPoints = require("./rewards.mongo");

async function getAllRewards() {
  return await rewardPoints.find({}, { _id: 0, __V: 0 });
}

async function addCalculatedPoints(points) {
  console.log("points", points);
}

module.exports = {
  getAllRewards,
  addCalculatedPoints,
};
