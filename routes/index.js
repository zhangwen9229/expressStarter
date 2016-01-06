var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'index'
    });
});

router.get('/test', function (req, res, next) {
    var option = {
        title: 'test'
    }
    if (req.headers['x-pjax']) {
        option.layout = false;
    }
    console.log("aa" + req.headers['x-pjax']);
    res.render('test', option);
});


module.exports = router;