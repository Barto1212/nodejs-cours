const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:1234@cluster0.wu4lnyz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connecté à la base de donnée");
  } catch (error) {
    console.log(error);
  }
};

const disconnect = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
};

const mongo = { connect, disconnect };
module.exports = mongo;
