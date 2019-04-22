var express = require('express');
var router = express.Router();

/* GET home pages. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/move',(req,res) =>{
  res.json({
    code:200,
    data:Date.now()
  })
})

module.exports = router;
