const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const nameRoutes = require('./routes/names');

app.use("/names", nameRoutes);

const server = app.listen(1904, () => {
    console.log(`Server started succesfully on port ${server.address().port}`);
});