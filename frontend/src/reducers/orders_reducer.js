import { RECEIVE_ORDERS, RECEIVE_ORDER, REMOVE_ORDER } from "../actions/order_actions";



const OrdersReducer = (state={}, action) =>  {
    Object.freeze(state); 
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ORDERS:
            // let orderState = {};
            // Object.values(action.orders).forEach(order => {
            //     orderState[order._id] = order
            // })
            // return orderState
            return action.orders;
        case RECEIVE_ORDER:
            newState[action.order._id] = action.order
            return newState
        case REMOVE_ORDER: 
            let orderId = action.order._id
            delete newState[orderId]
            return newState
        default:
            return state;
    }
}

export default OrdersReducer; 