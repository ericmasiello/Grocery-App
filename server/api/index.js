var router = require('express').Router();

//router.use('/users');
router.route('/')
  .get(function(req, res, next){
    res.json([{
      user: 'Eric'
    }]);
  })

module.exports = router;
