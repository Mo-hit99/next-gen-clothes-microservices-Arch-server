import express from "express";
import helmet from "helmet";
import dotenv from 'dotenv'
import cors from 'cors'
import {db_connection} from './config/db_connection/db_connection.js'
import invoice_Router from "./routes/invoice_router.js";

dotenv.config();

const port = process.env.PORT || 8001;
const app = express();
app.use(helmet({ crossOriginResourcePolicy: false,}));

const corsOptions = {
  origin:`${process.env.CLIENT_HTTP_LINK}`, // Allow this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // If you need to include credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(invoice_Router);

app.options("*", cors(corsOptions));

if(process.env.NODE_ENV === 'production'){
    console.log('Production server Running')
}else{
    console.log('Development server Running')
}
app.listen(port,()=>{
  console.log("Server running invoice at http://localhost:" + port);
  db_connection()
})
