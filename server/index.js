const express = require('express');
const mongoose = require('mongoose');
const connect=require("./Configs/db")
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());

//use cors
app.use(cors());

//import routes
const NoteItemRoute = require('./routes/noteItems');




app.use('/', NoteItemRoute);



//connect to server

app.listen(process.env.PORT || 8000,async ()=>{
   
    try{
    await connect()
    
        console.log("8000")
    }catch(e){
        console.log(e.message)
    }
})
