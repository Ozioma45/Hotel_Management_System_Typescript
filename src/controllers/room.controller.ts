import { Request, Response } from "express";
import Room from "../models/room";

async function getAllRooms(req: Request, res: Response) {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function createRoom(req: Request, res: Response) {
  const { name } = req.body;
  try {
    const newRoom = await Room.create({ name });
    res.status(201).json(newRoom);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
}

async function getRoomById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

async function updateRoom(req: Request, res: Response) {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json(updatedRoom);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
}

async function deleteRoom(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

export { getAllRooms, createRoom, getRoomById, updateRoom, deleteRoom };
