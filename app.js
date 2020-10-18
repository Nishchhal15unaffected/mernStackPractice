const express=require('express');
const app=express();
var bodyParser = require('body-parser');
const port=process.env.PORT || 5000;
//routes
require('./routes')(app);
//serve static files
app.use(express.static('public'))
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
//  app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
// const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
// parse application/json
// app.use(bodyParser.json())
app.set('view engine','ejs')

app.get('/profile/:id',(req,res)=>{
	res.send(req.params.id);
})
app.listen(port,()=>{
	console.log("server running on port 5000");
})

/*
module import
get or routers
middleware
serve static file
documentation
ejs
ajax fetch
promises
async await
for in and of and each loop
events and event listeners
THIS keyword
object prototype 
math object
spread operator
map and filter
form validation
*/