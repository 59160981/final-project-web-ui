const express = require('express');
const Router = express.Router();
const Custo = require('../models/mst_customer');
const User = require('../models/mst_employee');
const registerReceipt = require('../models/trn_register_receipt');
const Order = require('../models/trn_order');
orderID = ""
userLogin = ""

Router.route('/').get(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            Custo.find(function (err, custo) {
                console.log(custo)
                res.render('offician-register', { login: userName, custo: custo });
            })
        })
    }
})

Router.route('/recieveRegister/:id').get(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin , function (err, user) {
            Custo.findById(req.params.id, function (err, custo) {
                userName = user.firstname + " " + user.lastname
                res.render('offician-register-receiveRegister', { login: userName, custo: custo });
            })
        })
    }
})

Router.route('/recieveRegister/:id').post(function (req, res) {
    const ID_car_receipt = req.params.id
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin , function (err, user) {
            userName = user.firstname + " " + user.lastname
            Custo.findById(ID_car_receipt, function (err, custo) {
                registerReceipt.find(function (err, registerreceipt) {
                    const id = registerreceipt.length + 1;
                    var data_register_receipt = new registerReceipt({
                        ID_register_receipt: id,
                        register: req.body.register,
                        generation: req.body.generation,
                        color: req.body.color,
                        datein: req.body.datein,
                        dateout: req.body.dateout,
                        ID_customer: custo.ID_customer,
                        ID_employee: user.ID_employee
                    })
                    console.log(data_register_receipt)
                    data_register_receipt.save()
                    Order.find(function(err,order){
                        const ID_order = order.length+1
                        const data_order = new Order({
                            ID_order: ID_order,
                            ID_employee: user.ID_employee,
                            ID_customer: custo.ID_customer,
                            ID_car_receipt: id,
                            details: [{ name: "เดินทะเบียน รถยนต์รุ่น " + data_register_receipt.generation + "\n" + 
                                              "สี " + data_register_receipt.color + "\n" +
                                              "ป้ายทะเบียน " + data_register_receipt.register, price: 3000, amount: 1 }],
                            totalprice: 3000,
                            status: "ยังไม่จ่าย",
                            order_type: "เดินทะเบียน"
                        })
                        orderID = data_order.ID_order
                        console.log(orderID)
                        console.log(data_order)
                        data_order.save()
                        res.render('offician-register-receiveRegister-print',{login:userName, data:data_register_receipt, data2:data_order.ID_order})
                    })
                })
            })
        })
    }
});

module.exports = Router;