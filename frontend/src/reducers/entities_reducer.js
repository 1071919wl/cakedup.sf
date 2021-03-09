import { combineReducers } from 'redux'; 
import userReducer from "./user_reducer"; 
import OrdersReducer from "./orders_reducer"; 
import PickupsReducer from "./pickups_reducer"; 


export default combineReducers ({
    currentUser: userReducer,
    orders: OrdersReducer,
    pickups: PickupsReducer
});