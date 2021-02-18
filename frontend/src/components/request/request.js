import React, { useState, useRef, useEffect } from "react";

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
            Classics
            <form onSubmit={submitRequest}>
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
    )
}
export default Request