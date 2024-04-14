const mongoose = require('mongoose');

// Users Schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  passwordhash:{
    type: String,
    required: [true, "Password is required"],
  }
});

// Model
exports.usermodel = mongoose.model('users', userSchema);