const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateOrderInput(data){
    let errors = {};

    data.setDate = validText(data.setDate) ? data.setDate : '';

    if(Validator.isEmpty(data.setDate)){
        errors.setDate = 'Please provide available dates for pick up'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}