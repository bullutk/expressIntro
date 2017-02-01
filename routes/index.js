var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {
	var dcClass=["sean", "drew", "daniel", "kyle", "rishi", "liz", "anna", "ryan", "connie" ];
  res.render('index', { classArray: dcClass });
});
router.get('/reverse', (req, res, next)=> {
	var dcClass=["sean", "drew", "daniel", "kyle", "rishi", "liz", "anna", "ryan", "connie" ];
  res.render('indexReverse', { classArray: dcClass });
});
router.get('/blackjack',(req, res, next)=>{
	res.render('blackjack', {})
});
module.exports = router;
