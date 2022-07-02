// dependencies
const express = require("express");
const mongooseDB = require("./mongooes.js");
const PeopleModel = require("./models/peopleModel")
//app initialization
const app = express();

app.get("/", (req, res) => {
    res.send("Hello there....!");
});

app.post("/people", (req, res) => {
    const people = new PeopleModel(req.body);
    people.save((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(result);
        }
    });
});

app.post("/people-cb", async (req, res) => {
    
    try {
        const people = new PeopleModel(req.body);
        const result = await people.save();
        res.send(result);
       } catch (error) {
        res.status(500).send(error);
       }
    
})

// server running at 3000 port
app.listen(3000, () => {
    mongooseDB();
    console.log("server running at 3000 port.....!");
})