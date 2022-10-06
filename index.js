"use strict"

const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");

let names = ["Rebekah", "Daniel", "Eduard", "Shayan", "Dyllan"];

const server = app.listen(1904, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
});

app.get("/getAll", (req, res) => res.send(names));

app.post("/addName", (req, res) => {
    const name = req.body.name;
    names.push(req.body.name);
    res.status(201).send(`${name} successfully added`);
});

app.delete("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.put("/replace/:id", (req, res) => {
    const index = req.params.id;
    const oldName = names[index];
    const newName = req.body.name;
    names[index] = newName;
    res.send(`${oldName} has been replaced with ${newName}`)
})
