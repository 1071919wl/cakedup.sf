import { RECEIVE_PICKUPS, RECEIVE_PICKUP } from "../actions/pickup_actions";


const PickupsReducer = (state={}, action) =>  {
    Object.freeze(state); 
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PICKUPS:
            return action.pickups;
        case RECEIVE_PICKUP:
            newState[action.pickup._id] = action.pickup
            return newState
        default:
            return state;
    }
}

export default PickupsReducer; 