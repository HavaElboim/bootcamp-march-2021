const mongoose = require("mongoose");

const User = require("./user");

const connectDb = () => {
  const mongoUrl = process.env.MONGO_USER_NAME_PASS;
  console.log("Connecting to mongo server: " + mongoUrl);
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
};
const models = { User };

module.exports = { connectDb, models };
