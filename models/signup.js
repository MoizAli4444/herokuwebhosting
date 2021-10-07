// dependencies
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// connect to database
mongoose.connect('mongodb://localhost/Moavia',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Create Model
const Schema = mongoose.Schema;

const Signup = new Schema({
    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    rand_token : {
        type : String,
        default :Date.now() +''+ Date.now()
    }
}, { timestamps: true } , {rand_tokena : Date.now() +''+ Date.now()});
// Export Model
Signup.plugin(passportLocalMongoose);

module.exports = mongoose.model('SignUp', Signup);
