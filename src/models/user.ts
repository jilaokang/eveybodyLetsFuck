import { Schema, model, Document } from "mongoose";
export interface User extends Document {
  username: String;
  password: String;
}

const user = new Schema({
  username: String,
  password: String
});

export default model("user", user);
