import React, { useState, useRef, useEffect } from "react";
// import { Link } from 'react-router-dom'

import NavBarContainer from '../nav/navbar_container';

import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../actions/order_actions';

const Order = (props) => {

    const totalOrders = useSelector(state => state.entities.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        // props.fetchOrders()
        dispatch(fetchOrders())
    }, [])

    function ordersList(){
        let orders = null;
        orders = totalOrders.length ? totalOrders : null

        return orders === null ? 
                <div></div>
        :
                <ul>
                   {totalOrders.map((order, i) => (
                        <li key={order._id}>
                            {order.name}
                        </li>
                    ))} 
                </ul>
        
    }

    return (
        <div>
            <NavBarContainer />
            Order Index Page
            {ordersList()}

        </div>
    )


}

export default Order;