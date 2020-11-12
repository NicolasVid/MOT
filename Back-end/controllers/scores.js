const score = require("../models/score");

exports.getScores= (req, res, next) => {
    score.find()
      .then((scores) => {
        res.status(200).json(scores);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
  };

exports.postScore = (req, res, next) => {
    const newScore = new score ({
        name: req.body.name,
        minutes: req.body.minutes,
        seconds: req.body.seconds,
    })
    newScore
    .save()
    .then(() => {
      res.status(201).json({
        message: "Score saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.createBa = (req, res, next) => {
  const thing = new ba({
    username: req.body.username,
    ba: req.body.ba,
    greets: 0,
  });
  thing
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};