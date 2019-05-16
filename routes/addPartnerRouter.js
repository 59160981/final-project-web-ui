const express = require('express');
const app = express();
const addPartnerRouter = express.Router();
const Partner = require('../models/mst_partner');
var userLogin = "";

addPartnerRouter.route('/').get(function (req, res) {  
  res.render('addPartner', { err: false });
});

addPartnerRouter.route('/add').post(function (req, res) {  
  const DataUser = new Partner(req.body);
  const part_ID = req.body.ID_partner;
  Partner.findOne({ ID_partner: part_ID }, function (err, userInServer) {
    console.log(userInServer)
    if (userInServer) {
      Partner.find(function (err, partner) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('have user in server')
          res.render('addPartner', {err: true});
        }
      });
    } else {
      console.log(DataUser);
      DataUser.save();
      res.redirect('/addPartner');
    }
  });
});

module.exports = addPartnerRouter;