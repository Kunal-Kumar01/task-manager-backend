import express from "express";
import 'dotenv/config';
import dbConnect from "./config/db.js";

dbConnect();

const app = express();

app.get("/", (req, res)=>{
    res.send("hello world, Kunal")
})

app.listen(process.env.PORT);