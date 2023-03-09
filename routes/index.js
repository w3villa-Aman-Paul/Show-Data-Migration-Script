var express = require('express');
const { migrateShowData } = require('./migrateShowData');
const deleteBullKeys = require('./deleteBullKeys');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/migrateShowData', migrateShowData);
router.get('/deleteBullKeys', deleteBullKeys);


module.exports = router;
