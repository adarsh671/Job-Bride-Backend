import express from "express";
import isAuthenticated from "../middlewares/isauthenticated.js";
import { getCompany, getCompanyById, registerCompany, updateCompany } from "../controllers/companycontroller.js";

const router = express.Router();


router.post("/register",isAuthenticated,registerCompany)
router.get("/get",isAuthenticated,getCompany)
router.get("/get/:id",isAuthenticated,getCompanyById)
router.post("/update/:id",isAuthenticated,updateCompany)


export default router;