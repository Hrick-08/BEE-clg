const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

let url = process.env.MONGO_URL;

const connection = mongoose.connect(url);

module.exports = {connection};