"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let app = express();
app.get('/', function (req, res) {
    res.send('hello world');
});
exports.default = app;
