"use strict";
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://chiew256:p3ntAboy@cluster0.nbsyv.mongodb.net/testing?retryWrites=true&w=majority';
mongoose.connect(uri, 
    {useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true});

const connection = mongoose.connection;
connection.once('open', (err) =>{
    if(err) console.error(err);
    else console.log('MongoDB database connection established successfully');
})

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})

