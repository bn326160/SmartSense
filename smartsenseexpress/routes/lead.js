var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('lead', {
        title: 'Lead Dashboard',
    });
});

module.exports = router;
