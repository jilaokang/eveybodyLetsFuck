import { Schema, model } from "mongoose";

const rooms = new Schema({
  title: String,
  introduce: String
});

export const Roomsmodel = model("rooms", rooms);
