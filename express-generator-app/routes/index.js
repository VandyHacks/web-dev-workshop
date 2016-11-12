var express = require('express');
const request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'VandyHacks III', talks: []});
});

/* GET home page. */
router.get('/talks', function(req, res, next) {
  res.render('index', { talks: ['Web Dev', 'Unity', 'Git', 'Python'] });
});

/* GET home page. */
router.get('/talk/:talk', function(req, res, next) {
  res.render('index', { talks: [req.params.talk] });
});

const clientID = 'NjE5MjIyNnwxNDc4OTcyNDUw'
const secret = 'UXb4vcatWDmdvJyWg_KNGBwLd6xPALPOwFBZrDDo'
const url = 'https://' + clientID + ':' + secret + '@api.seatgeek.com/2/events/'

router.get('/seatgeek/:eventID', function(req, res, next) {

  request.get(url + req.params.eventID, (error, response, body) => {
      if (!error && response.statusCode == 200) {
          res.send(body);
      }
      res.send('Event not found');
  });

});

module.exports = router;
