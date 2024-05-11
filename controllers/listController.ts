import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// @desc    Get lists
// @route   GET /api/lists
// @access  Public

async function getList(req: Request, res: Response) {
  const item = await prisma.lists.findMany({
    include: {
      Item: true,
    },
  });
  if (item.length === 0) {
    return res.status(200).json({ message: "Sorry, no lists found teehee." });
  }
  return res.status(200).json(item);
}

// @desc    Set lists
// @route   POST /api/lists/create
// @access  Public
async function setList(req: Request, res: Response) {
  const { title } = req.body.data;

  const result = await prisma.lists.create({
    data: {
      title,
    },
  });
  if (!result) {
    return res.status(500).json({ message: "Error creating item." });
  }
  return res.status(200).json(result);
}

// @desc    Delete lists
// @route   POST /api/lists/delete
// @access  Public
async function deleteList(req: Request, res: Response) {
  const { id } = req.body;

  const result = await prisma.lists.delete({
    where: { id: id },
    include: {
      Item: true,
    },
  });

  if (!result) {
    return res.status(500).json({ message: "Error deleting list." });
  }

  return res.status(200).json({ message: "List deleted.", result });
}

const listController = { getList, setList, deleteList };

export default listController;
