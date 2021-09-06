import '../css/style.css';
import ExpenseDate from './ExpenseDate';
import React, { useState } from 'react';

function ExpenseItem(props){

    const [title, setTitle] = useState(props.title);
    

    function clickHandler() {
        setTitle("Updated");
        console.log(title);
    };

    return (
        <div className="w-90 rounded my-2 bg-grey-darker mx-auto">
            <div className="w-100 text-center font-bold flex rounded shadow py-4 px-8">
               <ExpenseDate date={props.date}></ExpenseDate>
               <div className="w-30 text-white pt-4">
                    <p>{title}</p>
               </div>
               <div className="w-40 pt-6">
                    <button className="btn bg-white rounded shadow-2xl"> ${props.amount} </button>
                    <span><button className="btn bg-orange rounded mx-2" onClick={clickHandler}>Update</button></span>
               </div>
            </div>
        </div>
    );
}

export default ExpenseItem;