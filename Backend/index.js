const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModal = require('./models/User')
const app = express()
app.use(cors())
app.use(express.json())


app.post("/createUser" , (req, res)=>{
    UserModal.create(res.body)
    .then(users=>res.json(users))
    .catch(err =>res.json(err))
})

mongoose.connect ='mongodb+srv://shraddha:Shraddha24@atlascluster.0dsjmdo.mongodb.net/crud?retryWrites=true&w=majority&appName=AtlasCluster'
app.listen(3001, ()=>{
     console.log("Serve is Running");
})