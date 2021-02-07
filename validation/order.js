const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateOrderInput(data){
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.phone = validText(data.phone) ? data.phone : '';

    if(Validator.isEmpty(data.name)){
        errors.name = 'Please tell us your name'
    }

    if(Validator.isEmpty(data.phone)){
        errors.phone = 'Please provide contact information'
    }

    if(!Validator.isLength(data.phone, {min: 10, max: 11})){
        errors.phone = 'Please provide valid number'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}