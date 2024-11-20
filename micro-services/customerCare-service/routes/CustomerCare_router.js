import express from "express";
// import dotenv from 'dotenv'
import { deleteAllMessage, deleteMessage, getMessageData, MessageSender } from "../controller/CustomerCareChatBox.js";
import { upload } from "../Image_Multer/Image_multer.js";


export const CustomerCareChatBox_router = express.Router()
CustomerCareChatBox_router.get('/api/v1/messages',getMessageData)
CustomerCareChatBox_router.post('/api/v1/messages',upload.single('product-img'),MessageSender)
CustomerCareChatBox_router.delete('/api/v1/messages/delete/:id',deleteMessage)
CustomerCareChatBox_router.delete('api/v1/messages/deleteAll',deleteAllMessage);