import mongoose, { Schema, Document } from "mongoose";

interface IRoom extends Document {
  name: string;
  roomType: string;
  price: number;
}

const roomSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
