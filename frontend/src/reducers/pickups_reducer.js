import { RECEIVE_PICKUPS, RECEIVE_PICKUP } from "../actions/pickup_actions";


const PickupsReducer = (state={}, action) =>  {
    Object.freeze(state); 
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PICKUPS:
            return action.orders;
        case RECEIVE_PICKUP:
            newState[action.order._id] = action.order
            return newState
        default:
            return state;
    }
}

export default PickupsReducer; 