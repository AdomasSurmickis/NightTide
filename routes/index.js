var express = require("express");
var router = express.Router();


router.get("/", function(req, res){
   res.render("./landing");
});


router.get("/products", function(req, res){
   res.render("./products/index");
});


module.exports = router;



 



 
// router.get('/contact', (req, res) => {
//     console.log('Request for contact page recieved')
//     res.render('contact')
// })
