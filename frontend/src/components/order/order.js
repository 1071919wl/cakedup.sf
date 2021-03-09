import React, { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import NavBarContainer from '../nav/navbar_container';

import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../../actions/order_actions';


//!test
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
//!test

const Order = (props) => {

    const totalOrders = useSelector(state => state.entities.orders)
    const [selectedDay, setSelectedDay] = useState({selectedDays: []});
    const dispatch = useDispatch()

    useEffect(() => {
        // props.fetchOrders()
        dispatch(fetchOrders())
    }, [])

    //handle saving pickup dates
    const submitPickup = (e) => {
        e.preventDefault();
        console.log(selectedDay);
    }

    //!calendar
    // const handleDayClick = (day, modifiers = {}) => {
    //     if (modifiers.disabled) {
    //         return; 
    //     }
        
    //     let obj = {
    //         selectedDay: modifiers.selected ? undefined : day,
    //     }
    //     setSelectedDay(obj);
    // }


    const handleDayClick = (day, { selected }) => {
        const { selectedDays } = selectedDay;

        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);     
        }

        setSelectedDay({ selectedDays });
    }
    //!calendar

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
            <div>
                <h1>Provide this months pick up date</h1>
                <form onSubmit={submitPickup}>
                    <DayPicker 
                        todayButton="Go to Today"
                        selectedDays={selectedDay.selectedDays}
                        onDayClick={handleDayClick}
                        disabledDays={[
                            {
                            before: new Date()
                            }
                        ]}

                    />
                    <div>
                        <input type='submit' value='Save'/>
                    </div>
                </form>
            </div>

        </div>
    )


}

export default Order;