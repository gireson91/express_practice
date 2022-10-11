const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tdp_db", {
    useNewUrlParser: true
});

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true   
    },
    height: String,
    eyeColour: String,
    livesIn: [{
        town: String,
        county: String
    }],
});

const teamModel = mongoose.model("team", teamSchema); 

module.exports = {
    teamModel
}
