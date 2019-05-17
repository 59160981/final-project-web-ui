const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerReceipt = new Schema({
    ID_register_receipt: {type: String},
    register: {type: String},
    generation: {type: String},
    color: {type: String},
    datein: {type: String},
    dateout: {type: String},
    ID_customer: {type: String},
    ID_employee: {type: String}
},
    {
        collection: 'trn_register_receipt'
    });

module.exports = mongoose.model('registerReceipt', registerReceipt);