import { useState } from "react";



function ExpenseForm(){

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
 
    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value); 
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    

    return(
        <form className="my-2" onSubmit={submitHandler}>
            <div className="flex text-left">
                <div className="w-50 mr-2">
                    <label>Title</label>
                    <input className="form-input" value={enteredTitle} onChange={TitleChangeHandler} type="text"/>
                </div>
                <div className="w-50 ml-2">
                    <label>Amount</label>
                    <input className="form-input" type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler}  />
                </div>
            </div>
            
            <div className="w-50 text-left mt-2 mr-2">
                <label>Date</label>
                <input  className="form-input" type="date" value={enteredDate} onChange={DateChangeHandler} min="2019-01-01" max="2022-12-31" />
            </div>
            <div className="mt-6 text-white">
                <button className="btn w-30 bg-orange font-bold rounded" type="submit">Add Expense</button>
            </div>
            
        </form>
    );
}

export default ExpenseForm;