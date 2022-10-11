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
    teamModel.create(req.body)
    .then(result => res.status(201).send(result))
    .catch(e => next(e));
});

router.delete("/delete/:id", (req, res, next) => {
    teamModel.findByIdAndDelete(req.params.id)
    .then(results => res.send(results))
    .catch(err => next(err))
});

router.put("/replace/:id", (req, res, next) => {
    const {id} = req.params;
    const newData = req.body;
    teamModel.findByIdAndUpdate(id, newData, next)
    .then(console.log(req.body))
    .catch(err => next(err))
});

router.use((err, req, res, next) => {
    console.log(err.stack);
    next(err);
});

router.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.message || "Error Occurred");
})

module.exports = router;