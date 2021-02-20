import React, { useState } from "react";

import '../../assets/stylesheets/request.scss';

import quad1 from '../../assets/images/quad/q1.jpg';

const Request = ({postOrder}) => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [comment, setComment] = useState("");

    const submitRequest = (e) => {
        e.preventDefault();

        let newOrder = {
            name: name,
            phone: phone,
            date: date,
            comment: comment
        };

        
        postOrder(newOrder).then(() => {
            alert('thanks for your submission')
        });
    }


    return(
        <div>
            <h1 className='request_title'>Menu</h1>
            <h2 className='classic_options'>Classic Flavors</h2>


            <div className='menu_container'>

                <div className='menu_img_sec'>
                    <div>
                        <img alt="" src={quad1} className='q1'/>
                    </div>
                    <div>
                        <img alt="" src={quad1} className='q1'/>
                    </div>
                    <div>
                        <img alt="" src={quad1} className='q1'/>
                    </div>
                    <div>
                        <img alt="" src={quad1} className='q1'/>
                    </div>
                    <div>
                        <img alt="" src={quad1} className='q1'/>
                    </div>
                    <div>
                        <img alt="" src={quad1} className='q1'/>
                    </div>


                </div>

                <div className='menu_form_container'>
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

                        <div>
                            <input type='submit' value='Submit Order'/>
                        </div>

                    </form>
                </div>
            
            </div>
        </div>
    )
}
export default Request