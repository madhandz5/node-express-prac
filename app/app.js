"use strict";

// Modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Routing
const home = require("./src/routes/home");

// App Setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// 데이터에 한글, 공백같은 문자 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home);

module.exports = app;
