import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getQueue = async (req, res) => {
  try {
    const response = await prisma.tb_queue.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.massage });
  }
};

export const getQueueById = async (req, res) => {
  try {
    const response = await prisma.tb_queue.findUnique({
      where: {
        id_queue: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.massage });
  }
};

export const createQueue = async (req, res) => {
  const { name, phone_number } = req.body;
  try {
    //console.log("In" + phone_number);
    const queue = await prisma.tb_queue.create({
      data: {
        name: name,
        phone_number: phone_number,
      },
    });
    res.status(201).json(queue);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.massage });
  }
};

export const updateQueue = async (req, res) => {
  const { name, phone_number } = req.body;
  try {
    const queue = await prisma.tb_queue.update({
      where: {
        id_queue: Number(req.params.id),
      },
      data: {
        name: name,
        phone_number: phone_number,
      },
    });
    res.status(200).json(queue);
  } catch (error) {
    res.status(400).json({ msg: error.massage });
  }
};

export const deleteQueue = async (req, res) => {
  const { name, phone_number } = req.body;
  try {
    const queue = await prisma.tb_queue.delete({
      where: {
        id_queue: Number(req.params.id),
      },
    });
    res.status(200).json(queue);
  } catch (error) {
    res.status(400).json({ msg: error.massage });
  }
};
