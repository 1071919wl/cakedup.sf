import * as OrdersAPIUtil from "../util/orders_api_util"

export const RECEIVE_ORDERS = "RECEIVE_ORDERS";
export const RECEIVE_ORDER = "RECEIVE_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const RECEIVE_ORDER_ERRORS = "RECEIVE_ORDER_ERRORS"
export const REMOVE_ORDER_ERRORS = "REMOVE_ORDER_ERRORS";


//action 
//! once thunk action returns with results, actions sends to store

const receiveOrders = (orders) => {
    return {
        type: RECEIVE_ORDERS,
        orders
    }
}

const receiveOrder = (order) => {
    return {
        type: RECEIVE_ORDER,
        order
    }
}

const removeOrder = (order) => {
    return {
        type: REMOVE_ORDER,
        order
    }
}

const receiveOrderErrors = (errors) => {
    return{
        type: RECEIVE_ORDER_ERRORS,
        errors
    }
}

export const removeOrderErrors = () => {
    return{
        type: REMOVE_ORDER_ERRORS,
    }
}

//thunk actions

export const fetchOrders = () => dispatch => {
    return OrdersAPIUtil.fetchOrders()
        .then(res => dispatch(receiveOrders(res.data)))
        .catch(err => dispatch(receiveOrderErrors(err.response.data)))
}

export const postOrder = (newOrder) => dispatch => {
    return OrdersAPIUtil.postOrder(newOrder)
        .then(res => dispatch(receiveOrder(res.data)))
        .catch(err => dispatch(receiveOrderErrors(err.response.data)))
}

export const updateOrder = (orderId, orderUpdates) => dispatch =>{
    return OrdersAPIUtil.updateOrder(orderId, orderUpdates)
        .then( res => { dispatch(receiveOrder(res.data))})
        .catch(err => dispatch(receiveOrderErrors(err.response.data)))
}

export const deleteOrder = (orderId) => dispatch => {
    return OrdersAPIUtil.deleteOrder(orderId)
        .then( res => { dispatch(removeOrder(res.data)) })
        .catch(err => dispatch(receiveOrderErrors(err.response.data)))
}