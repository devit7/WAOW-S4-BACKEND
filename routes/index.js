var express = require('express');
const { getIndex } = require('../controller');
var router = express.Router();

/* GET home page. */
router.get('/', getIndex);

module.exports = router;
