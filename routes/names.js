const router = require('express').Router();
const { teamModel } = require("../database")


const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

router.use(logger);

router.get("/getAll", (req, res) => teamModel.find({}).then(results => res.send(results)).catch(err => next(err)));

let newDoc = new teamModel();

newDoc.save().then(() => console.log("Done!"));


router.post("/addTeamMember", (req, res, next) => {
    teamModel.create(req.body).then(result => res.status(201).send(result)).catch(e => next(e));
});

router.delete("/delete/:id", (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

router.put("/replace/:index", (req, res) => {
    const index = req.params.index;
    const oldName = names[index];
    const newName = req.query.name;
    names[index] = newName;
    res.send(`${oldName} has been replaced with ${newName}`)
})

router.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

router.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "Error Occurred");
})

module.exports = router;