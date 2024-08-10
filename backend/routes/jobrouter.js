import express from "express";
import isauthenticated from "../middlewares/isauthenticated.js";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/jobcontroller.js";

const router = express.Router();

router.post("/create", isauthenticated, postJob);
router.get("/alljobs", isauthenticated, getAllJobs);
router.get("/getadminjobs", isauthenticated, getAdminJobs);
router.get("/get/:id", isauthenticated, getJobById);

export default router;
