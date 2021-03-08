const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateOrderInput(data){
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.phone = validText(data.phone) ? data.phone : '';
    data.getDate = validText(data.getDate) ? data.getDate : '';

    if(Validator.isEmpty(data.name)){
        errors.name = 'Please tell us your name'
    }

    if(Validator.isEmpty(data.phone)){
        errors.phone = 'Please provide contact information'
    }

    if(!Validator.isLength(data.phone, {min: 10, max: 11})){
        errors.phone = 'Please provide valid number'
    }

    //!covered by frontend regrex
    // let validInt = { 
    //     "1":true, "2":true, "3":true, "4":true, "5":true,
    //     "6":true, "7":true, "8":true, "9":true, "0":true,
    // };

    // for( let i = 0; i < data.phone.length; i ++){
    //     if( validInt[data.phone[i]] === undefined ){
    //         errors.phone = 'Please provide numbers between "0-9"'
    //     }
    // }

    if(Validator.isEmpty(data.getDate)){
        errors.getDate = 'Please select a pick up date'
    }

    if(data.request.length < 1){
        errors.request = 'Cart must contain an item'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

}