import * as PickupsAPIUtil from "../util/pickups_api_util"

export const RECEIVE_PICKUPS = "RECEIVE_PICKUPS";
export const RECEIVE_PICKUP = "RECEIVE_PICKUP";
export const RECEIVE_PICKUP_ERRORS = "RECEIVE_PICKUP_ERRORS"
// export const REMOVE_ORDER_ERRORS = "REMOVE_ORDER_ERRORS";


//action 
//! once thunk action returns with results, actions sends to store

const receivePickups = (pickups) => {
    return {
        type: RECEIVE_PICKUPS,
        pickups
    }
}

const receivePickup = (pickup) => {
    return {
        type: RECEIVE_PICKUP,
        pickup
    }
}


const receivePickupErrors = (errors) => {
    return{
        type: RECEIVE_PICKUP_ERRORS,
        errors
    }
}

// export const removeOrderErrors = () => {
//     return{
//         type: REMOVE_ORDER_ERRORS,
//     }
// }

//thunk actions

export const fetchPickups = () => dispatch => {
    return PickupsAPIUtil.fetchPickups()
        .then(res => dispatch(receivePickups(res.data)))
        .catch(err => dispatch(receivePickupErrors(err.response.data)))
}

export const postPickup = (newPickup) => dispatch => {
    return PickupsAPIUtil.postPickup(newPickup)
        .then(res => dispatch(receivePickup(res.data)))
        .catch(err => dispatch(receivePickupErrors(err.response.data)))
}

export const updatePickup = (pickupId, pickupUpdates) => dispatch =>{
    return PickupsAPIUtil.updatePickup(pickupId, pickupUpdates)
        .then( res => { dispatch(receivePickup(res.data))})
        .catch(err => dispatch(receivePickupErrors(err.response.data)))
}

// export const deleteOrder = (orderId) => dispatch => {
//     return OrdersAPIUtil.deleteOrder(orderId)
//         .then( res => { dispatch(removeOrder(res.data)) })
//         .catch(err => dispatch(receiveOrderErrors(err.response.data)))
// }