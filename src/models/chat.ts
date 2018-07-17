import { Schema, model } from "mongoose";

const chatrecord = new Schema({
  message: String
});

export const Chatrecordmodel = model("chatrecord", chatrecord);
