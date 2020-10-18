const bodyParser = require('body-parser'); 
	
const mongoose= require('mongoose');
const {mongourl} = require('./config/keys');
const wish=require("./config/models/wish"); 
mongoose.connect(mongourl,{
	useNewUrlParser:true,
	// useCreateIndex:true
	 useUnifiedTopology: true
});
module.exports=(app)=>{
app.use(bodyParser.json());
app.get('/',(req,res)=>{
	res.sendFile(__dirname + '/index.html');
	})
app.get('/tt',(req,res)=>{
	wish.find({})
	.then(data=>{
		res.send(JSON.stringify(data));
	})})
app.get('/rr',(req,res)=>{
	res.render('home');
})
app.post('/login',(req,res)=>{
	const Item=new wish({
		wish:req.body.username
	});
	Item.save()
	.then((data)=>{
		console.log("save");
	})
	console.log(req.body.username);
	// res.send(JSON.stringify(req.body));
	// res.send(JSON.stringify(req.body));
})
}