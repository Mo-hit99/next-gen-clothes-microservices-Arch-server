import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import {db_connection} from './config/db_connection/db_connection.js'
import cors from "cors";
const app = express();

app.use(express.json({
  limit:'20mb'
}))
app.use(cors());

// Gateway Configuration
const services = {
  "/invoiceData": "http://localhost:3001",
  "/product": "http://localhost:3002",
  "/razorpayData": "http://localhost:3003",
  "/userData": "http://localhost:3004",
};

// Configure routes for each service
Object.entries(services).forEach(([path, target]) => {
  app.use(
    path,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: (path) => path.replace(new RegExp(`^${path}`), ""), // Optional path rewrite
    })
  );
});

if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode");
} else {
  console.log("Running in development mode");
}
app.listen(5000, () => {
  console.log("http://localhost:5000");
  db_connection()
});
