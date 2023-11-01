// usermodel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: false
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false
  },
  profilePicture: String,
  about: String,

}, {
  timestamps: true
});


const User = mongoose.model('user', UserSchema);



module.exports = User;
