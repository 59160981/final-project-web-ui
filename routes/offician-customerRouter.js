const express = require('express');
const app = express();
const addCustomerRouter = express.Router();
const Custo = require('../models/mst_customer');
const User = require('../models/mst_employee');
var login = "";

addCustomerRouter.route('/addRepair').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      res.render('offician-customer-addRepair', { login: userName, err: false });
    })
  }
});

addCustomerRouter.route('/addRepair').post(function (req, res) {
  const DataUser = new Custo(req.body);
  const cus_id = req.body.ID_customer;
  Custo.findOne({ ID_customer: cus_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Custo.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-customer-addRepair', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/repair');
    }
  });
});


// -- หน้าซื้อ --
addCustomerRouter.route('/addBuy').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      res.render('offician-customer-addBuy', { login: userName, err: false });
    })
  }
});

addCustomerRouter.route('/addBuy').post(function (req, res) {
  const DataUser = new Custo(req.body);
  const cus_id = req.body.ID_customer;
  Custo.findOne({ ID_customer: cus_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Custo.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-customer-addBuy', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/buy');
    }
  });
});
// -- END --

// -- ขาย --
addCustomerRouter.route('/addSell').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      res.render('offician-customer-addSell', { login: userName, err: false });
    })
  }
});

addCustomerRouter.route('/addSell').post(function (req, res) {
  const DataUser = new Custo(req.body);
  const cus_id = req.body.ID_customer;
  Custo.findOne({ ID_customer: cus_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Custo.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-customer-addSell', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/sell');
    }
  });
});
// -- END --

// -- เดินทะเบียน --
addCustomerRouter.route('/addRegister').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      res.render('offician-customer-addRegister', { login: userName, err: false });
    })
  }
});

addCustomerRouter.route('/addRegister').post(function (req, res) {
  const DataUser = new Custo(req.body);
  const cus_id = req.body.ID_customer;
  Custo.findOne({ ID_customer: cus_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Custo.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-customer-addRegister', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/register');
    }
  });
});
// -- END --


// -- จัดการลูกค้า --
addCustomerRouter.route('/').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      Custo.find(function (err, custo) {
        res.render('offician-customer', { login: userName, custo: custo });
      })
    })
  }
})
// -- END --

addCustomerRouter.route('/add').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      res.render('offician-customer-add', { login: userName, err: false });
    })
  }
});

addCustomerRouter.route('/add').post(function (req, res) {
  const DataUser = new Custo(req.body);
  const cus_id = req.body.ID_customer;
  Custo.findOne({ ID_customer: cus_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Custo.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-customer-add', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/customer');
    }
  });
});

addCustomerRouter.route('/edit/:id').get(function (req, res) {
  const cusID = req.params.id
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      Custo.findById(cusID, function (err, customer) {
        res.render('offician-customer-edit', { login: userName, customer: customer, err: false });
      })
    })
  }
});

addCustomerRouter.route('/edit/:id').post(function (req, res) {
  const cusID = req.params.id
  Custo.findById(cusID, function (err, customer) {
    if (!customer)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      customer.ID_employee = req.body.ID_ecustomere;
      customer.firstname = req.body.firstname;
      customer.lastname = req.body.lastname;
      customer.birthday = req.body.birthday;
      customer.gender = req.body.gender;
      customer.address = req.body.address;
      customer.telephone = req.body.telephone;
      customer.email = req.body.email;

      customer.save().then(customer => {
        res.redirect('/offician/customer');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

addCustomerRouter.route('/delete/:id').get(function(req, res) {
  Custo.findByIdAndRemove({ _id: req.params.id },
      function(err, coin) {
          if (err) res.json(err);
          else res.redirect('/offician/customer');
      });
});

module.exports = addCustomerRouter;