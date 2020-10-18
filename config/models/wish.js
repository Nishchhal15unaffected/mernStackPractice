	const mongoose = require('mongoose');
	const Schema=mongoose.Schema;
	//schema is like a blueprint it tell us type of data
	const WishSchecma=Schema({
			wish:String
	})
	module.exports=mongoose.model("wish",WishSchecma)