import express from "express";
import dotenv from 'dotenv'
import cors from "cors"
import productRoutes from "./routes/productRoutes.js"

import connectMongo from "./config/db-config.js";

dotenv.config()
const app = express();
const url = process.env.MONGOURI

app.use(express.json());
app.use("/api/",productRoutes);

const serviceStart = async () => {
  try {
    await connectMongo(url)
    app.listen(process.env.PORT,()=> console.log("server dinleniyor"))
  } catch (error) {
    console.log("Server can not be started", error)    
  }
}

serviceStart()