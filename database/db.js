const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGODO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb Atlas connected successfully"))
    .catch((err) =>
      console.log("An error ocurred while connecting to MongoDb Atlas")
    );
};

module.exports = connectToDb;
