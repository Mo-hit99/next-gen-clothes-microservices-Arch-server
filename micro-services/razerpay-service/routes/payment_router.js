import express from 'express'
import { createPaymentOrder, getPaymentDetails,verifyPaymentOrder } from '../controller/razorpayController.js';
const Payment_router = express.Router();

// get order

Payment_router.get('/api/v1/payment', getPaymentDetails)

//  create order
Payment_router.post('/api/v1/payment/order',createPaymentOrder);


Payment_router.post ('/api/v1/payment/verify',verifyPaymentOrder)





export default Payment_router;