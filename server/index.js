const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmpModel = require("./Model/model");
const routes = require("./Routes/routes");
require("./Database/db");

const app = express();
app.use(cors());
// used whenever we transfer data from the front end to the back end, to convert it to json format.
app.use(express.json());

app.use("/", routes);

app.listen(3000, () => {
    console.log("server listening on port 3000");
});
