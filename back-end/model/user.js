var mongoose = require('../config.js').mongoose;
var Schema = mongoose.Schema;

var UesrSchema = new Schema({
	username: String,
	encryptedPassword: String,
	email: String,
	signature: String,
	hints: Number,
	friends: Array,
	online: Boolean,
	currentRoom: String
});

var User = mongoose.model('User',UesrSchema);

module.exports = User;