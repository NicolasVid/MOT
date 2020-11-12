exports.getScores= (req, res, next) => {
    scores.find()
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
    scores
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