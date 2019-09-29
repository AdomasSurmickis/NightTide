var   express         = require('express'),
      app             = express(),
      bodyParser      = require("body-parser"); 


// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

      


// var indexRoute   = require("./routes");
//     // contactRoute = require("./routes/contact.js");

// 
// app.use(express.static(__dirname +  "/public"));

 
// app.use(bodyParser.urlencoded({extended:true}));

// app.use("/", indexRoute);
// // app.use("/contact", contactRoute);



app.set("view engine", "ejs");

// Set the folder for css & java scripts
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
   res.render('landing.ejs');
})

app.get('/products', function (req, res) {
    res.render('products.ejs');
 })

 app.get('/single', function (req, res) {
   res.render('single.ejs');
})

 app.get('/checkout', function (req, res) {
    res.render('checkout.ejs');
 })

var server = app.listen(1000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

