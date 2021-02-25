import { RECEIVE_ORDER_ERRORS, REMOVE_ORDER_ERRORS } from '../actions/order_actions';

const nullErrors = [];

const OrderErrorsReducer = (state = nullErrors, action) =>{
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ORDER_ERRORS:
      return action.errors;
    case REMOVE_ORDER_ERRORS:
      return [];
    default:
      return state;
  }  
}

export default OrderErrorsReducer;