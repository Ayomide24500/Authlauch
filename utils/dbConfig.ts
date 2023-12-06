import mongoose, { connect } from "mongoose";
const URL: string | undefined = process.env.DATABASE_STRING;

export const mainConnection = async () => {
  try {
    connect("mongodb://127.0.0.1:27017/Authflows").then(() => {
      console.log("Database is now connected..🚀🚀🚀!");
    });
  } catch (error) {
    console.log(error);
  }
};
