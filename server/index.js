import express from 'express';
import dotenv from 'dotenv';
import Route from './routes/route.js';
import Connection from './dbs/dbs.js';
// import client from './dbs/dbs.js';
import cors from "cors";
import bodyParser from 'body-parser';
const app=express();
const PORT=8001;

dotenv.config();
app.use(bodyParser.json({extended:true}))
app.use(cors());
app.use('/',Route);
// client();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);

app.listen(PORT,()=>console.log('Server is running successfully on Port',PORT))