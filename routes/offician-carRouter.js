const express = require('express');
const app = express();
const addCarRouter = express.Router();
const Custo = require('../models/mst_customer');
const User = require('../models/mst_employee');
const Car = require('../models/mst_car');
var login = "";





// -- จัดการลูกค้า --
addCarRouter.route('/').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      Car.find(function (err, car) {
        res.render('offician-stock', { login: userName, car: car });
      })
    })
  }
})
// -- END --

addCarRouter.route('/add').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      res.render('offician-stock-add', { login: userName, err: false });
    })
  }
});

addCarRouter.route('/add').post(function (req, res) {
  const DataUser = new Car(req.body);
  const car_id = req.body.tanknumber;
  Car.findOne({tanknumber: car_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Car.find(function (err, car) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-stock-add', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/stock');
    }
  });
});

addCarRouter.route('/edit/:id').get(function (req, res) {
  const carID = req.params.id
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      Car.findById(carID, function (err, car) {
        res.render('offician-stock-edit', { login: userName, car: car, err: false });
      })
    })
  }
});

addCarRouter.route('/edit/:id').post(function (req, res) {
  const carID = req.params.id
  Car.findById(carID, function (err, car) {
    if (!car)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
    
      ///
      car.generation = req.body.generation;
      car.brand = req.body.brand;
      car.register = req.body.register;
      car.tanknumber = req.body.tanknumber;
      car.color = req.body.color;
      car.power = req.body.power;
      car.price = req.body.price;
      car.type = req.body.type;

      car.save().then(car => {
        res.redirect('/offician/stock');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

addCarRouter.route('/delete/:id').get(function(req, res) {
  Car.findByIdAndRemove({ _id: req.params.id },
      function(err, coin) {
          if (err) res.json(err);
          else res.redirect('/offician/stock');
      });
});

module.exports = addCarRouter;