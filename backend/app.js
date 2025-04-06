import express from "express";
import {config} from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app=express();

console.log(
  "Allowed origins:",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL
);


//creating a middle wares to connect frontend with backend
app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        credentials: true,
 })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true})); //////////

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  ); 
//v1 version router can be updated future
  app.use("/api/v1/message", messageRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/appointment", appointmentRouter);
  
  dbConnection();

  app.use(errorMiddleware); //this has to be used in the end always

export default app;

