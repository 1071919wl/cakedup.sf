const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateOrderInput(data){
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.phone = validText(data.phone) ? data.phone : '';
    data.date = validText(data.date) ? data.date : '';

    if(Validator.isEmpty(data.name)){
        errors.name = 'Please tell us your name'
    }

    if(Validator.isEmpty(data.phone)){
        errors.phone = 'Please provide contact information'
    }

    if(!Validator.isLength(data.phone, {min: 10, max: 11})){
        errors.phone = 'Please provide valid number'
    }

    if(Validator.isEmpty(data.date)){
        errors.date = 'Please select a pick up date'
    }

    if(data.request.length < 1){
        errors.request = 'Cart must contain an item'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}