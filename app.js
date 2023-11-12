var express = require('express');
var logger = require('morgan');
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require('cors')

var productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: '*'
}))

app.use('/products',productsRouter)

module.exports = app;
