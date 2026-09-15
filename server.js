import express from "express";

import cors from "cors";
import todoRoutes from "./routes/todo.routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();


//middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api", todoRoutes);


//connect to database
connectDB();

//server start

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})