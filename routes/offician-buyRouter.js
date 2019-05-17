const express = require('express');
const Router = express.Router();
const Custo = require('../models/mst_customer');
const User = require('../models/mst_employee');
const Partner = require('../models/mst_partner');
const Car = require('../models/mst_car');
const Order = require('../models/trn_order');

userLogin = ""
//-- render หน้าเลือก ลูกค้า 
Router.route('/').get(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            Custo.find(function (err, custo) {
                // console.log(custo)
                res.render('offician-buy', { login: userName, custo: custo });
            })
        })
    }
})
//-- render หน้าเลือก partner 
cusID = ""
Router.route('/partner/:id').get(function (req, res) {
    cusID = req.params.id
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            Partner.find(function (err, partner) {
                // console.log("Hello")
                // console.log(customerChoose)
                res.render('offician-buy-partner', { login: userName, partner: partner });
            })
        })
    }
})

//-- render หน้าเลือก Car
partnerID = ""
Router.route('/car/:id').get(function (req, res) {
    partnerID = req.params.id
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            res.render('offician-buy-car', { login: userName, err: false });
        })
    }
})
// เพิ่มข้อมูลรถ & เปิดบิล partner
car_id = ""
ID_order = ""
Router.route('/addCar').post(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            //add car to stock
            const have = 0
            const DataCar = new Car(req.body);
            // console.log(DataCar);
            car_id = DataCar._id;
            Car.findOne({ tanknumber: car_id }, function (err, carInStock) {
                if (carInStock) { have = 1 }
            })
            if (have == 1) {
                res.render('offician-buy-car', { login: userName, err: true });
            } else {
                DataCar.save()
                Partner.findById(partnerID, function (err, partner) {
                    // Get current date
                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = today.getFullYear();

                    today = mm + '-' + dd + '-' + yyyy;
                    // End
                    //สร้าง order ขายรถ
                    Custo.findById(cusID, function (err, custo) {
                        Order.find(function (err, order) {
                            ID_order = order.length + 1
                            console.log("ID ORDER" + ID_order)

                            const data_order = new Order({
                                ID_order: ID_order,
                                ID_employee: user.ID_employee,
                                ID_customer: custo.ID_customer,
                                ID_car_receipt: null,
                                details: [{ name: DataCar.tanknumber, price: DataCar.price, amount: 1 }],
                                totalprice: DataCar.price,
                                status: "ยังไม่จ่าย",
                                order_type: "ซื้อรถ"
                            })
                            data_order.save()
                        })
                    })
                    // console.log(data_order)
                    // add order partner
                    var order = {
                        details: [{ name: "ค่านายหน้า", price: DataCar.price * 0.02, amount: 1 },
                        { name: "ค่าเดินทาง", price: 500, amount: 1 }],
                        totalprice: DataCar.price * 0.02 + 500
                    }
                    if (partnerID == "0") {
                        res.redirect('/offician/buy/promise/Buy')
                    } else {
                        res.render('offician-billPartnerBuy-print', { login: userName, partner: partner, emp: user, today: today, order: order });
                    }
                })
            }
        })
    }
})
//-- render หน้าเลือก promise Buy
Router.route('/promise/Buy').get(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            Custo.findById(cusID, function (err, custo) {
                Car.findById(car_id, function (err, car) {
                    console.log(car)
                    // Get current date
                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = today.getFullYear();
                    today = mm + '-' + dd + '-' + yyyy;
                    // End
                    //ราคารวม totalPrice
                    const totalPrice = parseFloat(car.price) + parseFloat(car.price * 0.07)
                    res.render('promiseBuy', { login: userName, custo: custo, car: car, today: today, totalPrice: totalPrice, emp: user });
                })
            })
        })
    }
})

// bill ของ sell
Router.route('/bill/buy').get(function (req, res) {
    if (userLogin == "") {
        res.redirect('/login')
    } else {
        console.log("ID ORDER" + ID_order)
        User.findById(userLogin, function (err, user) {
            userName = user.firstname + " " + user.lastname
            Custo.findById(cusID, function (err, customer) {
                // Get current date
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = mm + '-' + dd + '-' + yyyy;
                // End
                //ดึง order ขายรถ
                Order.findOne({ ID_order: ID_order }, function (err, order) {
                    console.log(order)
                    res.render('offician-billBuy-print', { login: userName, custo: customer, emp: user, today: today, order: order });
                })

            })
        })
    }
})
module.exports = Router;