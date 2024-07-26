const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModal = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/createUser", (req, res) => {
    UserModal.create(req.body)  
        .then(user => res.json(user))
        .catch(err => res.json(err));
});

app.get("/getUsers", (req, res) => {
    UserModal.find({})
        .then(users => res.json(users)) 
        .catch(err => res.json(err));
});

mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Database is connected");
})
.catch(err => {
    console.log("Database connection error: ", err);
});

app.listen(3001, () => {
    console.log("Server is running");
});
