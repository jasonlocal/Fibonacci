var express = require('express');
var router = express.Router();
var math = require('../math');

router.get('/', function(req,res,next){
    if(req.query.fibonum){
        res.render('fibonacci', {
            title: "Calculate Fobonacci Numbers",
            fibonum: req.query.fibonum,
            fibval: math.fibonacci(req.query.fibonum)
        });
    }else{
        res.render('fibonacci', {
            title: "Calculate Fibonacci numbers",
            fibval: undefined
        });
    }
})

module.exports = router;