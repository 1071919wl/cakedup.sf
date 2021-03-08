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
    getDate:{
        type: Date,
        default: Date.now,
        required: true
    },
    request:[{
        flavor: String,
        count: Number,
        priceEach: Number,
    }],
    comment:{
        type: String
    }
},
    {
        timestamps: true
    }
);


const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;

// let user = {
//     "name": 'Billyb',
//     'phone': '1231231234',
//     'date': '01/01/01'
// }