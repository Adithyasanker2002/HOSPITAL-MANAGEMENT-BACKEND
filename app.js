import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from './database/dbConnection.js';
import messageRouter from './router/messageRouter.js'
import {errorMiddleware} from './middlewares/errorMiddleware.js'
import userRouter from "./router/userRouter.js";
import appointmentRouter from './router/appointmentRouter.js'
// import cloudinary from "cloudinary";

const app = express()
config({path:'./.env'})

app.use(
    cors({
      origin: [process.env.FRONDEND_URL, process.env.DASHBOARD_URL],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
  app.use(messageRouter);
  app.use(userRouter);
  app.use(appointmentRouter);

  // cloudinary.v2.config({
  //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  //     api_key: process.env.CLOUDINARY_API_KEY,
  //     api_secret: process.env.CLOUDINARY_API_SECRET,
  //   });
  
  // app.listen(process.env.PORT,()=>{
  //     console.log(`Server running on ${process.env.PORT}`);
      
  // })
 

dbConnection()

app.use(errorMiddleware)
export default app

// "/api/v1/user"