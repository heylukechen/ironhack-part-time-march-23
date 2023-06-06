const mongoose = require("mongoose");
const Product = require('../models/Product.model');
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/demo-app";

  const mockProducts = [{name: "Gym shoes"}, {name: "Gym bells"}, {name: "Gym jumping ropes"}]

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .then(() => Product.create(mockProducts))
  .then(() => {
    console.log('Products were added')
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
