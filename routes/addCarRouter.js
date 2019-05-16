const express = require('express');
const app = express();
const addCarRouter = express.Router();
const Car = require('../models/mst_car');
var userLogin = "";

addCarRouter.route('/').get(function (req, res) {
    res.render('addCar', { err: false });
});

addCarRouter.route('/add').post(function (req, res) {
    const DataUser = new Car(req.body);
    const car_tank = req.body.tanknumber;
    Car.findOne({ tanknumber: car_tank }, function (err, userInServer) {
        if (userInServer) {
            console.log('have user in server')
            res.render('addcar', { err: true });
        } else {
            console.log(DataUser);
            DataUser.save();
            res.redirect('/addCar');
        }
    });
});

module.exports = addCarRouter;