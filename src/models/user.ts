// import * as mongoose from "mongoose";
import { Schema, model } from "mongoose";

const user = new Schema({
  username: String,
  password: String
});

export const userModel = model("user", user);
