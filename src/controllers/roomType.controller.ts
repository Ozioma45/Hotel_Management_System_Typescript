import { Request, Response } from "express";
import RoomType from "../models/roomType";

async function getAllRoomTypes(req: Request, res: Response) {
  try {
    const roomTypes = await RoomType.find();
    res.json(roomTypes);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function createRoomType(req: Request, res: Response) {
  const { name } = req.body;
  try {
    const newRoomType = await RoomType.create({ name });
    res.status(201).json(newRoomType);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
}

async function getRoomTypeById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const roomType = await RoomType.findById(id);
    if (!roomType) {
      return res.status(404).json({ message: "Room type not found" });
    }
    res.json(roomType);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function updateRoomType(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedRoomType = await RoomType.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!updatedRoomType) {
      return res.status(404).json({ message: "Room type not found" });
    }
    res.json(updatedRoomType);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
}

async function deleteRoomType(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedRoomType = await RoomType.findByIdAndDelete(id);
    if (!deletedRoomType) {
      return res.status(404).json({ message: "Room type not found" });
    }
    res.json({ message: "Room type deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

export {
  getAllRoomTypes,
  createRoomType,
  getRoomTypeById,
  updateRoomType,
  deleteRoomType,
};
