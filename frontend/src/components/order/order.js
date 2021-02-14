import React, { useState, useRef, useEffect } from "react";
// import { Link } from 'react-router-dom'

import NavBarContainer from '../nav/navbar_container';

const Order = (props) => {

    useEffect(() => {
        props.fetchOrders()
    }, [])

    function ordersList(){
        let orders = null;
        orders = props.orders.length ? props.orders : null

        return orders === null ? 
                <div></div>
        :
                <ul>
                   {props.orders.map((order, i) => (
                        <li key={i}>
                            {order.name}
                            {order.phone}
                            {order.date}
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