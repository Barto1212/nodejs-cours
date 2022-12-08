import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      "mongodb+srv://user:1234@cluster0.wu4lnyz.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("connecté à la base de donnée");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
