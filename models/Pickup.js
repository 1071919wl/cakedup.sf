const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PickupSchema = new Schema({
    //!date now getMonth?
    // month: { 
    //     type: String,
    //     required: true
    // },
    setDate:{
        type: Date,
        default: Date.now,
        required: true
    }
},    
    {
        timestamps: true
    }
);


const Pickup = mongoose.model('Pickup', PickupSchema);
module.exports = Pickup;
