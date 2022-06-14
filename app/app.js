"use strict";

// Modules
const express = require("express");
const app = express();

// Routing
const home = require("./src/routes/home");

app.use("/", home);
app.use(express.static(`${__dirname}/src/public`));

app.set("views", "./src/views");
app.set("view engine", "ejs");

module.exports = app;
