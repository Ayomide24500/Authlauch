import mongoose, { connect } from "mongoose";
const URL: string | undefined = process.env.DATABASE_STRING;

export const mainConnection = async () => {
  try {
    connect(
      "mongodb+srv://Ayomide12:Ayo234@cluster0.31friv9.mongodb.net/Flowdb?retryWrites=true&w=majority"
    ).then(() => {
      console.log("Database is now connected..🚀🚀🚀!");
    });
  } catch (error) {
    console.log(error);
  }
};
