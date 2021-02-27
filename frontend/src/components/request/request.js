import React, { useState, useEffect } from "react";

import '../../assets/stylesheets/request.scss';

import quad1 from '../../assets/images/quad/q1.jpg';
import menu2 from '../../assets/images/request/menu2.png';

const Request = ({postOrder, errors, errors2, removeOrderErrors}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [order, setOrder] = useState([]);
    const [comment, setComment] = useState("");
    const [itemCount, setItemCount] = useState(0);
    const [subtotal, setSubtotal] = useState(0);

    //sents order information to database
    const submitRequest = (e) => {
        e.preventDefault();

        let newOrder = {
            name: name,
            phone: phone,
            date: date,
            request: order,
            comment: comment
        };

        postOrder(newOrder).then((res) => {
            // console.log(errors2.name)
            if(res.type !== "RECEIVE_ORDER_ERRORS"){
                submitCleanUp();
            }
        });
        
    }

    //Close modal and clean errors after submission
    const submitCleanUp = () => {
        if(errors.length){
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

    //clear error messages
    useEffect(() => {
        removeOrderErrors();
    },[])

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
                            <input type='text' value={phone} onChange={e => setPhone(e.target.value)}/>
                        </label>
                            <div className='error_message'>
                                {errors2.phone}
                            </div>

                        <label>Date:
                            <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                        </label>
                            <div className='error_message'>
                                {errors2.date}
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