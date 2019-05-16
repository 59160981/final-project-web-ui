const express = require('express');
const app = express();
const testRouter = express.Router();
const Car = require('../models/car');
var userLogin = "";

testRouter.route('/buy').get(function (req, res) {
    res.render('promiseBuy', { err: false });
});

testRouter.route('/sell').get(function (req, res) {
    res.render('promiseSell', { err: false });
});

module.exports = testRouter;