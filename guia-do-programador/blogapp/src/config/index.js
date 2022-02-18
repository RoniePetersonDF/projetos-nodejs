const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('../database');

const app = express();


app.use(express.json());
app.use(express.static(path.join(__dirname, '../', 'public')));

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../', 'views'));

module.exports = app;