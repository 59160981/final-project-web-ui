const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://web:web1234@ds151076.mlab.com:51076/project');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//router req
const loginRouter = require('./routes/loginRouter')
const registerRouter = require('./routes/registerRouter')
const repasswordRouter = require('./routes/repasswordRouter')
const technicianRouter = require('./routes/technicianRouter')
const officianRouter = require('./routes/officianRouter')
const officianRepairRouter = require('./routes/offician-repairRouter')
const officianBillRouter = require('./routes/offician-billRouter')
const officianInvoiceRouter = require('./routes/offician-invoiceRouter')
const officianBuyRouter = require('./routes/offician-buyRouter')
const officianCustomerRouter = require('./routes/offician-customerRouter')
const officianSellRouter = require('./routes/offician-sellRouter')
const officianRegisterRouter = require('./routes/offician-registerRouter')
const officianPartnerRouter = require('./routes/offician-partnerRouter')
const officianEmployeeRouter = require('./routes/offician-employeeRouter')
const officianCarRouter = require('./routes/offician-carRouter')

//router
app.use('/login', loginRouter)
app.use('/register', registerRouter)
app.use('/repassword', repasswordRouter)
//technician
app.use('/technician', technicianRouter)
//offician
app.use('/offician', officianRouter)
app.use('/offician/repair', officianRepairRouter)
app.use('/offician/bill', officianBillRouter)
app.use('/offician/taxInvoice', officianInvoiceRouter)
app.use('/offician/buy', officianBuyRouter)
app.use('/offician/customer', officianCustomerRouter)
app.use('/offician/sell', officianSellRouter)
app.use('/offician/register', officianRegisterRouter)
app.use('/offician/partner', officianPartnerRouter)
app.use('/offician/employee', officianEmployeeRouter)
app.use('/offician/stock', officianCarRouter)



app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', '/home/login'));
});

app.listen(port, function() {
    console.log('start port http://localhost:' + port + "/login");
});