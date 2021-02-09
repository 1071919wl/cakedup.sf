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

