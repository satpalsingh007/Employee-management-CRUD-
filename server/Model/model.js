const mongoose = require("mongoose");
const employee = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: [16, "Age must be at least 18"],
        max: [120, "Age must be less than or equal to 120"],
    },
});
const EmpModel = mongoose.model("emp", employee);
module.exports = EmpModel;
