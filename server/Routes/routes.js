const express = require("express");
const EmpModel = require("../Model/model");
const router = express.Router();
router.post("/createUser", (req, res) => {
    EmpModel.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
});

router.get("/", (req, res) => {
    EmpModel.find({})
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
});

router.get("/getUser/:id", (req, res) => {
    const id = req.params.id;
    EmpModel.findById({ _id: id })
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
});

router.put("/updateUser/:id", (req, res) => {
    const id = req.params.id;
    EmpModel.findByIdAndUpdate(
        { _id: id },
        { name: req.body.name, email: req.body.email, age: req.body.age }
    )
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
});

router.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    EmpModel.findByIdAndDelete({ _id: id })
        .then((res) => res.json(res))
        .catch((err) => res.json(err));
});
module.exports = router;
