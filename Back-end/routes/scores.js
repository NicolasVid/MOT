const express = require('express');
const router = express.Router();
const scoreCtrl = require('../controllers/scores');

router.get('/', scoreCtrl.getScores);
router.post('/', scoreCtrl.postScore);

module.exports = router;