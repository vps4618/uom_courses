const express = require('express');
const bodyParser  = require("body-parser");
const {request,response} = require("express");

const app = express();
const db = require("./database");
app.use(bodyParser.json());



