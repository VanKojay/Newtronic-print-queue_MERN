import express from "express";
import {
  getQueue,
  getQueueById,
  createQueue,
  updateQueue,
  deleteQueue,
} from "../controllers/QueueControllers.js";

const router = express.Router();

router.get("/queue", getQueue);
router.get("/queue/:id", getQueueById);
router.post("/queue", createQueue);
router.patch("/queue/:id", updateQueue);
router.delete("/queue/:id", deleteQueue);

export default router;
