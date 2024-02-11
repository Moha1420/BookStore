import  express from "express";
import mongoose from "mongoose"; // Import mongoose

const { Schema, model } = mongoose; // Destructure Schema and model from mongoose


const bookSchema=mongoose.Schema({

title:{
    type:String,
    required:true,
},   
author:{
    type:String,
    required:true,
},  
publsihYear:{
    type:Number,
    required:true,
},
},
{
    timestamps:true,
}

);

export const Book=mongoose.model('cat',bookSchema);