import { Schema, model } from "mongoose";

const Rooms = new Schema({
  title: String,
  introduce: String
});

export const Roomsmodel = model("rooms", Rooms);
