"use strict";

// Modules
const express = require("express");
const app = express();

const PORT = 3000;

// Routing
const home = require("./routes/home");

app.use("/", home);

app.set("views", "./views");
app.set("view engine", "ejs");

module.exports = app;
