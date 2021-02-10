import { combineReducers } from 'redux'; 
import userReducer from "./user_reducer"; 
import OrdersReducer from "./orders_reducer"; 


export default combineReducers ({
    currentUser: userReducer,
    orders: OrdersReducer,
});