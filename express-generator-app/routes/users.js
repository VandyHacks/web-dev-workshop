var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Enter a user name to retrieve details');
});

router.get('/:name', function(req, res, next) {
  res.send('You have accessed user ' + req.params.name + "'s details.");
});

module.exports = router;
