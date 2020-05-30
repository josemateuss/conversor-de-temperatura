const express = require('express');
const convertController = require('../controllers/convertController');
const router = express.Router();

router.get('/convert', convertController.convert);

router.post('/convert', convertController.convertPost);

module.exports = router;