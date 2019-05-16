const express = require('express');
const Router = express.Router();
const Custo = require('../models/mst_customer');
const User = require('../models/mst_employee');
const Partner = require('../models/mst_partner');

userLogin = ""
customerChoose = ""

Router.route('/').get(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            Custo.find(function (err, custo) {
                res.render('offician-buy', { login: userName, custo: custo });
            })
        })
    }
})

//-- render หน้าเลือก partner 
Router.route('/partner/:id').get(function (req, res) {
    const cusID = req.params.id
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            Custo.findById(cusID, function (err, customer) {
                Partner.find(function (err, partner) {
                    customerChoose = customer
                    console.log("Hello")
                    console.log(customerChoose)
                    res.render('offician-buy-partner', { login: userName, partner: partner, customer: customer });
                })
            })

        })
    }
})


module.exports = Router;