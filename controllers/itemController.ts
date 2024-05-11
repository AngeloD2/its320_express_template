import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// @desc    Get items
// @route   GET /api/items
// @access  Public
async function getItem(req: Request, res: Response) {
  const item = await prisma.item.findMany({});

  if (item.length === 0) {
    return res.status(200).json({ message: "Sorry, no items found teehee." });
  }
  return res.status(200).json(item);
}

// @desc    Set items
// @route   POST /api/items/create
// @access  Public
async function setItem(req: Request, res: Response) {
  const { itemName, listId } = req.body.data;

  const result = await prisma.item.create({
    data: {
      itemName,
      listId,
    },
  });
  if (!result) {
    return res.status(500).json({ message: "Error creating item." });
  }
  return res.status(200).json({ message: "Successfully created" });
}

// @desc    Delete items
// @route   POST /api/items/delete
// @access  Public
async function deleteItem(req: Request, res: Response) {
  const { id } = req.body;

  console.log("received: ", id);
  const result = await prisma.item.delete({ where: { id: id } });

  if (!result) {
    return res.status(500).json({ message: "Error deleting item." });
  }
  return res.status(200).json(result);
}

const itemController = { getItem, setItem, deleteItem };

export default itemController;
