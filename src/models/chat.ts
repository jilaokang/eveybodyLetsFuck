import { Schema, model, Document } from "mongoose";

const chatrecord = new Schema({
  User: String,
  time: String,
  roomId: Number,
  message: String
});

export default model("chatrecord", chatrecord);

export interface Chat extends Document {
  User: String;
  time: String;
  roomId: Number;
  message: String;
}
