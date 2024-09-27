import { ModeloAlumnos } from "../models/alumno.model.js";

ModeloAlumnos.create({
    name:"Leslie",
    apepat: "Arjona"
})

export const test = ()=>{
    console.log("Funciona el controlador")
}