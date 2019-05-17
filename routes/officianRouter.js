const express = require('express');
const Router = express.Router();
const User = require('../models/mst_employee');
const Order = require('../models/trn_order')

userLogin = ""

Router.route('/mainpage').get(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {

        User.findById(userLogin, function (err, user) {
            // console.log(user)
            userName = user.firstname + " " + user.lastname
            Order.find({ status: "ชำระเงินแล้ว" }, function (err, order) {
                var totalRepair = 0;
                var totalSell = 0;
                var totalBuy = 0;
                var totalRegister = 0;
                var total = 0;
                for (const i in order) {
                    if (order[i].order_type == "การซ่อม") {
                        totalRepair += order[i].totalprice + order[i].totalprice*0.07
                    }else if (order[i].order_type == "ซื้อรถ") {
                        totalBuy += order[i].totalprice + 500 + (order[i].totalprice*0.07)
                    }else if (order[i].order_type == "ขายรถ") {
                        totalSell += order[i].totalprice + order[i].totalprice*0.07
                    }else{
                        totalRegister += order[i].totalprice + order[i].totalprice*0.07
                    }
                }
                total = totalRepair+totalSell+totalRegister-totalBuy
                res.render("offician-mainpage",{login:userName,totalRepair:totalRepair,totalSell:totalSell,totalBuy:totalBuy,totalRegister:totalRegister,total:total})
            })
        })
    }
});

module.exports = Router;