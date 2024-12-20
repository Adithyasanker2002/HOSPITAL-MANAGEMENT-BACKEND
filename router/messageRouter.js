import express from "express";
import { deleteMessage, getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// send message
router.post("/send", sendMessage);
// getallmeassage
router.get("/getallmessage",isAdminAuthenticated, getAllMessages);
// delete-Messages
router.delete("/delete-message/:id",deleteMessage);



export default router