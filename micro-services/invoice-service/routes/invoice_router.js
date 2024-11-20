import express from 'express'
import { createInvoiceRouter, deleteInvoiceRouter, getByIdInvoiceRouter, getInvoiceRouter, getRemainingDeliveryDays, updateInvoiceRouter, UpdateOrderStatus } from '../controller/invoice_controller.js';


const invoice_Router = express.Router();




invoice_Router.get('/api/v1/payment/invoice',getInvoiceRouter);
invoice_Router.get('/api/v1/payment/invoice/:id',getByIdInvoiceRouter);
invoice_Router.post('/api/v1/payment/invoice',createInvoiceRouter);
invoice_Router.put('/api/v1/payment/invoice/:id',updateInvoiceRouter);
invoice_Router.delete('/api/v1/payment/invoice/:id',deleteInvoiceRouter);
invoice_Router.put('/api/v1/payment/order/:invoiceId/status',UpdateOrderStatus);
invoice_Router.get('/api/v1/payment/invoices/:invoiceId/remaining-days',getRemainingDeliveryDays);



export default invoice_Router;