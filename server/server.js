import express from "express"
import dotenv from"dotenv"
import cors from "cors"
import mongoose from "mongoose";
import dns from "node:dns";
import { connectDB } from "./config/db.js";
import MachineCheckRoutes from "./routes/MachineCheckRoutes.js"

dotenv.config()

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
const PORT = process.env.PORT || 5000;


//db
connectDB();

//routes
app.use(cors());
app.use(express.json());
app.use("/api/checks", MachineCheckRoutes);

// start express server and listen the incoming HTTP req  
app.listen(PORT, () =>{
    console.log(`server running on PORT ${PORT}`);
});