require('dotenv').config()
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

// mongoose.connect(process.env.MONGODB_URL)
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://root:example@localhost:27017/test?authSource=admin"

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db