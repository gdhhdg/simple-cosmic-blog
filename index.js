var express = require('express');
var router = express.Router();
var Cosmic = require('cosmicjs');
var api = Cosmic();
var bucket = api.bucket({
    slug:'cosmic-blog-tutorial',
    read_key: 'tUr5Tk3LHchAuww556LKMvcCUhWe4IF9AfZu9Lj1j3VjpX0MJS'
});


/* GET home page. */
router.get('/', function(req, res, next) {
  bucket.getObjects({
      limit: 5
  }).then(data => {
  res.render('index', { 'data': data});
  })
});

router.get('/post/:slug', function(req, res, next) {
    bucket.getObject({
        slug: req.params.slug
    }).then(data => {
        console.log(data);
        res.render('post', { 'data': data});
    })
});


module.exports = router;
