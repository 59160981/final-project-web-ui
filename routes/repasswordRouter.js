const express = require('express');
const app = express();
const repasswordRouter = express.Router();
const Employee = require('../models/mst_employee');
var userLogin = "";

repasswordRouter.route('/').get(function (req, res) {  //render หน้า ลืมรหัสผ่าน
  res.render('repassword', { err: false });
});

repasswordRouter.route('/rePass').post(function (req, res) {  //update รหัสผ่าน
  const emp_id = req.body.emp_id;
  const emp_email = req.body.email
  Employee.findOne({ ID_employee: emp_id, email: emp_email }, function (err, employee) {
    console.log(employee)
    if (employee) {
      employee.ID_employee = employee.ID_employee;
      employee.password = req.body.newpassword;
      employee.firstName = employee.firstname;
      employee.lastName = employee.lastname;
      employee.birthday = employee.birthday;
      employee.gender = employee.gender;
      employee.address = employee.address;
      employee.telephone = employee.telephone;
      employee.email = employee.email;
      employee.position = employee.position;
      console.log("username : "+employee.ID_employee+"\nnew password : "+employee.password)
      employee.save()
      res.redirect('/login')
    } else {
      res.render("repassword", { err: true });
    }
  });
});

module.exports = repasswordRouter;