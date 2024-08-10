import express from "express"
import { login, logout, register, update } from "../controllers/usercontroller.js"
import isauthenticated from "../middlewares/isauthenticated.js"

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.get("/logout",logout)
router.post("/profile/update",isauthenticated,update)



export default router 