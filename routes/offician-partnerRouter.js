const express = require('express');
const app = express();
const addPartnerRouter = express.Router();
const Partner = require('../models/mst_partner');
const User = require('../models/mst_employee');
var login = "";

// คู่ค้าการซื้อ
addPartnerRouter.route('/addBuy').get(function (req, res) {
 
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      
      res.render('offician-partner-addBuy', { login: userName, err: false });
    })
  }
});

addPartnerRouter.route('/addBuy').post(function (req, res) {
  const DataUser = new Partner(req.body);
  const part_id = req.body.ID_partner;
  Partner.findOne({ ID_partner: part_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Partner.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-partner-addBuy', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/buy');
    }
  });
});
// จบบบบ

// คู่ค้าการ ขาย
addPartnerRouter.route('/addSell').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      
      res.render('offician-partner-addSell', { login: userName, err: false });
    })
  }
});

addPartnerRouter.route('/addSell').post(function (req, res) {
  const DataUser = new Partner(req.body);
  const part_id = req.body.ID_partner;
  Partner.findOne({ ID_partner: part_id }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Partner.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-partner-addSell', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/sell');
    }
  });
});

// จบบบบ

// จัดการคู่ค้า
addPartnerRouter.route('/').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      Partner.find(function (err, partner) {
        res.render('offician-partner', { login: userName, partner: partner });
      })
    })
  }
})

addPartnerRouter.route('/add').get(function (req, res) {
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      // console.log(user)
      userName = user.firstname + " " + user.lastname
      res.render('offician-partner-add', { login: userName, err: false });
    })
  }
});

addPartnerRouter.route('/add').post(function (req, res) {
  const DataUser = new Partner(req.body);
  const partID = req.body.ID_partner;
  Partner.findOne({ ID_partner: partID }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Custo.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('offician-partner-add', { err: true });
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/offician/partner');
    }
  });
});

addPartnerRouter.route('/edit/:id').get(function (req, res) {
  const partID = req.params.id
  if (userLogin == "") {
    res.redirect('/login')
  } else {
    User.findById(userLogin, function (err, user) {
      userName = user.firstname + " " + user.lastname
      Partner.findById(partID, function (err, partner) {
        res.render('offician-partner-edit', { login: userName, partner: partner, err: false });
      })
    })
  }
});

addPartnerRouter.route('/edit/:id').post(function (req, res) {
  const partID = req.params.id
  Partner.findById(partID, function (err, partner) {
    if (!partner)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      partner.ID_partner = req.body.ID_partner;
      partner.name = req.body.name;
      partner.telephone = req.body.telephone;
      partner.email = req.body.email;
      partner.address = req.body.address;
      partner.fax = req.body.fax;
      partner.partner_type = req.body.partner_type;

      partner.save().then(partner => {
        res.redirect('/offician/partner');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

addPartnerRouter.route('/delete/:id').get(function(req, res) {
  Partner.findByIdAndRemove({ _id: req.params.id },
      function(err, coin) {
          if (err) res.json(err);
          else res.redirect('/offician/partner');
      });
});

module.exports = addPartnerRouter;