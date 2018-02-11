const mongoose = require ('mongoose');
const {Schema} = mongoose; 
//using like this is called destructuring
// same as const Schema = mongoose.Schema


const userSchema = new Schema({
googleID : String,
});

mongoose.model('users', userSchema);
