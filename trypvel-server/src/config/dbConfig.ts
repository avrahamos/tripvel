import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log(`Mongo Connected: ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(`${error}`);
  }
};

export default connectDB;
