import React, { useState, useEffect } from "react";

import '../../assets/stylesheets/request.scss';

import quad1 from '../../assets/images/quad/q1.jpg';
import menu2 from '../../assets/images/request/menu2.png';

//!test
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
// import OrdersReducer from '../../reducers/orders_reducer';
//!test

const Request = ({postOrder, errors, errors2, removeOrderErrors}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState('');
    const [order, setOrder] = useState([]);
    const [comment, setComment] = useState("");
    const [itemCount, setItemCount] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    // const [date, setDate] = useState('');
    const [selectedDay, setSelectedDay] = useState({selectedDay: null});

    //!useReducer
    // const [state, dispatch] = useReducer(OrdersReducer);
    //!useReducer

    //sents order information to database
    const submitRequest = (e) => {
        e.preventDefault();

        let validPhone = []
        let phoneDup = phone;

        let validInt = { 
            "1":true, "2":true, "3":true, "4":true, "5":true,
            "6":true, "7":true, "8":true, "9":true, "0":true,
        };

        for( let i = 0; i < phoneDup.length; i ++ ){
            if( validInt[phoneDup[i]] !== undefined ){
                validPhone.push(phoneDup[i]);
            }
        }
        let phoneStr = validPhone.join('');

        let newOrder = {
            name: name,
            phone: phoneStr,
            getDate: selectedDay.selectedDay,
            request: order,
            comment: comment
        };

        postOrder(newOrder).then((res) => {
            if(res.type !== "RECEIVE_ORDER_ERRORS"){
                submitCleanUp();
            }
        });
        
    }

    //Close modal and clean errors after submission
    const submitCleanUp = () => {
        if(!errors2.length){
            document.getElementById("modal_exit_button").click();
            removeOrderErrors();
        }
    }

    //updates order state with what's in cart
    const handleOrder = (flavor, price) => {

        let newOrder = {
            flavor: flavor,
            count: 1,
            priceEach: price
        };

        let match = false;
        let dup = [...order];
        let newArr = [];

        for(let i = 0; i < dup.length; i ++){
            if( dup[i].flavor === flavor ){
                dup[i].count += 1;
                newArr.push(dup[i]);
                match = true;
            }else{
                newArr.push(dup[i]);
            };

        }
        
        if( match === false){
            newArr.length = 0;
            newArr.push(...dup, newOrder);
        };

        setOrder(newArr);
    };


    //remove item from cart
    const removeOrder = (flavor) => {
        
        let newArr = [...order];

        for(let i = 0; i < newArr.length; i ++){
            if( newArr[i].flavor === flavor ){
                if(newArr[i].count > 1){
                    newArr[i].count -= 1;
                }else if (newArr[i].count === 1){
                    newArr.splice(i, 1);
                }
            };
        };

        setOrder(newArr);
    };


    //updates item count and subtotal amount
    useEffect(() => {

        let count = 0;
        let subtotal = 0;

        order.map((order) => {
            count += order.count;
            subtotal += (order.count * order.priceEach);
        })
        setItemCount(count);
        setSubtotal(subtotal);

    }, [order])


    //!phone input formating
    useEffect(() => {
        
        const formattedPhoneNumber = formatPhoneNumber(phone) 
        setPhone(formattedPhoneNumber);

    },[phone])

    const formatPhoneNumber = (value) => {
        if (!value) return value;

        const phoneNumber = value.replace(/[^\d]/g, "");

        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 4) return phoneNumber;

        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }

        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }




    //clear error messages
    useEffect(() => {
        removeOrderErrors();
    },[])


    //!calendar

    const disabledDays = [
        new Date(2021, 2, 1), // mar, 15
        new Date(2021, 2, 2), 
        new Date(2021, 2, 3), 
        new Date(2021, 2, 5),
        new Date(2021, 2, 6), 
        new Date(2021, 2, 7), 
        new Date(2021, 2, 8), 
        new Date(2021, 2, 10), 
        new Date(2021, 2, 30), 
    ]

    function isDayDisabled(day) {
        return !disabledDays.some(disabledDay => 
            DateUtils.isSameDay(day, disabledDay)
        )
    }
    

    const handleDayClick = (day, modifiers = {}) => {
        if (modifiers.disabled) {
            return; 
        }
        
        let obj = {
            selectedDay: modifiers.selected ? undefined : day,
        }
        setSelectedDay(obj);
        
    }
    //!calendar


    //seeding classic flavors
    const classicFlavors = [
        {
            flavor: 'HazelNut + tella - HazelNut + tella', 
            price:30,
            img: quad1
        },
        {
            flavor: 'Matcha Madness - Matcha Madness', 
            price:20,
            img: quad1
        },
        {
            flavor: 'Purple Yam - Purple Yam', 
            price:40,
            img: quad1
        },
        {
            flavor: 'Durian Fun - Durian Fun', 
            price:30,
            img: quad1
        },
        {
            flavor: 'SeaSalt Caramel - SeaSalt Caramel', 
            price:35,
            img: quad1
        },
        {
            flavor: 'Oreo Mix - Oreo Mix', 
            price:40,
            img: quad1
        }
    ];


    return(
        <div className='request_container'>
            <h1 className='request_title'>Menu</h1>
            <h2 className='classic_options'>Classic Flavors</h2>

            <div className='menu_container'>

                <div className='menu_img_sec'>
                    {classicFlavors.map((flavor, i) => {
                        return(
                            <div className='menu_list' key={i}>
                                <img alt="" src={flavor.img} className='q1'/>
                                <div className='item_and_price'>
                                    <p className='flavor_name'>{flavor.flavor}</p>
                                    <div className='price_add'>
                                        <div>
                                            <p className='price_list'>${flavor.price}</p>
                                        </div>
                                        <div>
                                            <button type='submit' onClick={() => handleOrder(flavor.flavor, flavor.price)} className='add_button'>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className='menu_form_container'>

                    <div className='myOrder-topSec'>
                        <div>
                            My Order
                        </div>
                        <div>
                            ({itemCount} items)
                        </div>
                    </div>

                    {order.length ? 
                        <div className='menu-topSec2'>
                            <div className='menu-direction2'>
                                {order.map((order, i) => {
                                    return(
                                        <div key={i} className='list_container'>
                                            <div className='list_left_sec'>
                                                <div>
                                                    {order.count}
                                                </div>      
                                                <div className='x-separator'>&nbsp; &times; &nbsp;</div>            
                                                <div className='flavor_name_cart'>
                                                    {order.flavor}
                                                </div>
                                            </div>

                                            <div>
                                                ${order.priceEach}
                                            </div>
                                            <div className='add_min_container'>
                                                <div>
                                                    <button type='submit' onClick={() => handleOrder(order.flavor, order.price)} className='add_button2'>+</button>
                                                </div>
                                                <div>
                                                    <button type='submit' onClick={() => removeOrder(order.flavor)} className='minus_button'>-</button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div> 
                    :
                        <div className='menu-topSec'>
                            <div>
                                <img alt="" src={menu2} className='menu_img'/>
                            </div>
                            <div className='menu-direction'>
                                <p>Order is empty.</p>
                                <p>Browse our menu and start adding items.</p>
                            </div>
                        </div>
                    }

                    <div className='subtotal-topSec'>
                        <div>
                            Subtotal
                        </div>
                        <div>
                            ${subtotal}
                        </div>
                    </div>


                    <form onSubmit={submitRequest} className='menu_form'>
                        <label>Name:
                            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                        </label>
                            <div className='error_message'>
                                {errors2.name}
                            </div>

                        <label>Phone:
                            <input type='text' value={phone} maxLength = "14" onChange={e => setPhone(e.target.value)}/>
                        </label>
                            <div className='error_message'>
                                {errors2.phone}
                            </div>

                        <label>Pick Up Date:
                            {/* <input type="date" value={date} onChange={e => setDate(e.target.value)}/> */}
                            <DayPicker 
                                canChangeMonth={false} 
                                // fixedWeeks //shows 6 week each month
                                selectedDays={selectedDay.selectedDay}
                                onDayClick={handleDayClick}
                                disabledDays={[
                                    isDayDisabled,     
                                    {
                                    before: new Date()
                                    }
                                ]}
                            />
                            <p>
                                {selectedDay.selectedDay != null
                                ? selectedDay.selectedDay.toLocaleDateString()
                                : 'Please select from available day'}
                            </p>
                        </label>

                            <div className='error_message'>
                                {errors2.getDate}
                            </div>

                        <label>Special requests
                            <textarea type='text' value={comment} onChange={e => setComment(e.target.value)} />
                        </label>

                            <div className='error_message'>
                                {errors2.request}
                            </div>

                        <div className ='submit_container'>
                            <input type='submit' value='Submit Order' className='order_submit'/>
                        </div>

                    </form>
                    {/* {errors.map((err,i) => {
                        return (
                            <div key={i} className='error_message'>
                                {err}
                            </div>
                        )
                    })} */}
                </div>
            
            </div>
        </div>
    )
}
export default Request