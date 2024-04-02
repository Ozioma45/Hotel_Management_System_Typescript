import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roomType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RoomType",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
