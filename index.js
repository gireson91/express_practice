"use strict"

const express = require("express");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");

let names = ["Rebekah", "Daniel", "Eduard", "Shayan", "Dyllan"];

const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

//app.use(logger);

app.get("/getAll", (req, res,) => res.send(names));

app.post("/addName", logger, (req, res, next) => {
    const name = req.body.name;
    if (!req.body.name) return next({status: 400, message: "New name not provided"});
    names.push(req.body.name);
    res.status(201).send(`${name} successfully added`);
});

app.delete("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.put("/replace/:index", (req, res) => {
    const index = req.params.index;
    const oldName = names[index];
    const newName = req.query.name;
    names[index] = newName;
    res.send(`${oldName} has been replaced with ${newName}`)
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500 ).send(err.message || "Error Occurred");
})

const server = app.listen(1904, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
});