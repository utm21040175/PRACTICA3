import mongoose from "mongoose";
import cors from "cors";
import express from "express"; 
import dotenv from "dotenv";
import {test} from "./backend/controllers/alumno.controller.js"

dotenv.config();

mongoose.connect(process.env.urlBase)
.then(()=>{
    console.log("FUNCIONA")
})
.catch((error)=> {
    console.log("NO FUNCIONA", error)
})

const app = express();
app.use((cors))

app.listen(4000, ()=> {
    console.log("SE ESCUCHA")
})

test();