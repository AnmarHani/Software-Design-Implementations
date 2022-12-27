const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    min: [4, "Short Username, Minimum 4."],
    max: 50,
    required: [true, "Username Required."],
  },
  password: {
    type: String,
    min: [8, "Short Password, Minimum 8."],
    max: 50,
    required: [true, "Password Required."],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User