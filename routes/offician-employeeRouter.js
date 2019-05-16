const express = require('express');
const app = express();
const employeeRouter = express.Router();
const User = require('../models/mst_employee');
var login = "";

employeeRouter.route('/').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      User.find(function (err, employee) {
        res.render('offician-employee', { login: userName, err: false, employee: employee });
      })
    })
  }
});

employeeRouter.route('/add').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      res.render('offician-employee-add', { login: userName, err: false });
    })
  }
});

employeeRouter.route('/edit/:id').get(function (req, res) {
  const empID = req.params.id
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      User.findById(empID, function (err, employee) {
        res.render('offician-employee-edit', { login: userName, employee: employee, err: false });
      })
    })
  }
});

employeeRouter.route('/edit/:id').post(function(req, res) {
  const empID = req.params.id
  User.findById(empID, function(err, employee) {
      if (!employee)
          return next(new Error('Could not load Document'));
      else {
          // do your updates here
          employee.ID_employee = req.body.ID_employee;
          employee.password = req.body.password;
          employee.firstname = req.body.firstname;
          employee.lastname = req.body.lastname;
          employee.birthday = req.body.birthday;
          employee.gender = req.body.gender;
          employee.address = req.body.address;
          employee.telephone = req.body.telephone;
          employee.email = req.body.email;
          employee.position = req.body.position;

          employee.save().then(employee => {
                  res.redirect('/offician/employee');
              })
              .catch(err => {
                  res.status(400).send("unable to update the database");
              });
      }
  });
});

employeeRouter.route('/delete/:id').get(function(req, res) {
  User.findByIdAndRemove({ _id: req.params.id },
      function(err, coin) {
          if (err) res.json(err);
          else res.redirect('/offician/employee');
      });
});

employeeRouter.route('/add').post(function (req, res) {
  const DataUser = new User(req.body);
  const emp_id = req.body.ID_employee;
  User.findOne({ ID_employee: emp_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      User.find(function (err, employee) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-employee-add', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/employee');
    }
  });
});
// -- END --

module.exports = employeeRouter;