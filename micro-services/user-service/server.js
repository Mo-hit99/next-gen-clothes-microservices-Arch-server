import express from "express";
import helmet from "helmet";
import dotenv from 'dotenv'
import cors from 'cors'
import { db_connection } from "./config/db_connection/db_connection.js";
import { User_route } from "./routes/User_routes.js";
dotenv.config();

const port = process.env.PORT || 8004;
const app = express();
app.use(helmet());

// const corsOptions = {
//   origin:`${process.env.CLIENT_HTTP_LINK}`, // Allow this origin
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true, // If you need to include credentials (cookies, authorization headers)
// };
app.use(cors());

app.use(express.json());

app.use(User_route);

// app.options("*", cors(corsOptions));

if(process.env.NODE_ENV === 'production'){
    console.log('Production server Running')
}else{
    console.log('Development server Running')
}
app.listen(port,()=>{
  console.log("Server running user at http://localhost:" + port);
  db_connection()
})