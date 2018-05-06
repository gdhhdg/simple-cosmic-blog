var express = require('express');
var router = express.Router();
var Cosmic = require('cosmicjs');
var api = Cosmic();
var bucket = api.bucket({
    slug:'your slug',
    read_key: 'your readkey Name'
});


/* GET home page. */
router.get('/', function(req, res, next) {
  bucket.getObjects({
      limit: 2
  }).then(data => {
    console.log(data.objects[0]);
  res.render('index', { 'data': data});
  })
});

module.exports = router;
