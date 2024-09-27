import { Schema, model } from "mongoose";

const esquemaAlumnos = new Schema({
    name:{
        type: String
    },
    apepat:{
        type: String
    }
})

export const ModeloAlumnos = new model("TABLA DE REGISTRO DE ALUMNOS", esquemaAlumnos)