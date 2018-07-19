import { Schema, model, Document } from "mongoose";

const rooms = new Schema({
  roomname: String,
  roomintroduce: String,
  people: Number,
  user: String
});

export default model("rooms", rooms);

export interface Rooms extends Document {
  roomname: String;
  roomintroduce: String;
  people: Number;
  user: String;
}
