import mongoose from "mongoose";
export const dbconnection = () => {
  mongoose
    .connect(
      process.env.MONGO_URI,
      { dbName: "JobBridge" }
    )
    .then(() => {
      console.log("Database is successfully Connected");
    })
    .catch((error) => {
      console.log(`Some error occured in Database ${error}`);
    });
};
