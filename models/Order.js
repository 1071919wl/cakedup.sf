const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;

// let user = {
//     "name": 'Billyb',
//     'phone': '1231231234',
//     'date': '01/01/01'
// }