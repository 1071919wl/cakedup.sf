import React, { useState } from "react";

import '../../assets/stylesheets/request.scss';

import quad1 from '../../assets/images/quad/q1.jpg';

import menu from '../../assets/images/request/menu.png';

const Request = ({postOrder}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [order, setOrder] = useState([]);
    const [comment, setComment] = useState("");

    const submitRequest = (e) => {
        e.preventDefault();
        console.log(order)

        let newOrder = {
            name: name,
            phone: phone,
            date: date,
            order: order,
            comment: comment
        };

        postOrder(newOrder).then(() => {
            alert('thanks for your submission')
        });
    }

    //updates order state with what's in cart
    const handleOrder = (flavor, price) => {

        let newOrder = {
            name: flavor,
            count: 1,
            priceEach: price
        };

        let match = false;
        let newArr = [];

        for(let i = 0; i < order.length; i ++){
            if( order[i].name === flavor ){
                order[i].count += 1;
                newArr.push(order[i]);
                match = true;
            }else{
                newArr.push(order[i]);
            };

        }
        
        if( match === false){
            newArr.length = 0;
            newArr.push(...order, newOrder);
        };

        setOrder(newArr);
    }

    //seeding classic flavors
    const classicFlavors = [
        {
            name: 'flavor1', 
            price:30,
            img: quad1
        },
        {
            name: 'flavor2', 
            price:20,
            img: quad1
        },
        {
            name: 'flavor3', 
            price:40,
            img: quad1
        },
        {
            name: 'flavor4', 
            price:30,
            img: quad1
        },
        {
            name: 'flavor5', 
            price:35,
            img: quad1
        },
        {
            name: 'flavor6', 
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
                                    <p>{flavor.name}</p>
                                    <p>${flavor.price}</p>
                                    <input type="button" value='ADD' onClick={() => handleOrder(flavor.name, flavor.price)}/>
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
                            (0 items)
                        </div>
                    </div>


                    <div className='menu-topSec'>
                        <div>
                            <img alt="" src={menu} className='menu_img'/>
                        </div>
                        <div className='menu-direction'>
                            <p>Order is empty.</p>
                            <p>Browse our menu and start adding items.</p>
                        </div>
                    </div>

                    <div className='subtotal-topSec'>
                        <div>
                            Subtotal
                        </div>
                        <div>
                            (0 items)
                        </div>
                    </div>


                    <form onSubmit={submitRequest} className='menu_form'>
                        <label>Name:
                            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                        </label>

                        <label>Phone:
                            <input type='text' value={phone} onChange={e => setPhone(e.target.value)}/>
                        </label>

                        <label>Date:
                            <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
                        </label>

                        <label>Special requests
                            <textarea type='text' value={comment} onChange={e => setComment(e.target.value)} />
                        </label>

                        <div className ='submit_container'>
                            <input type='submit' value='Submit Order' className='order_submit'/>
                        </div>

                    </form>
                </div>
            
            </div>
        </div>
    )
}
export default Request