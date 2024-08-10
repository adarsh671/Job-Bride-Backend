import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import {config} from "dotenv"
import { dbconnection } from "./dbconnection/dbconnection.js";
import userRouter from "./routes/userrouter.js"
import companyRouter from "./routes/companyrouter.js"
import jobRouter from "./routes/jobrouter.js"
import applicaitonRouter from "./routes/applicationrouter.js"

config({ path: "./config/config.env" });
const PORT=process.env.PORT||4000
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })), app.use(cookieParser());
const corsOptions = {
  origin: "http//localhost:3000",
  credentials: true,
}; 
app.use(cors(corsOptions));

//Routes
app.use("/api/v1/user",userRouter)
app.use("/api/v1/company",companyRouter)
app.use("/api/v1/job",jobRouter)
app.use("/api/v1/application",applicaitonRouter)

dbconnection()
app.listen(PORT, () => {
  console.log("Server listening from port 4000");
});
