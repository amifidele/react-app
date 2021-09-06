import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";



function Expenses (props){

    const [filteredYear, SetFilteredyear]=  useState('2020');

    const filterChangeHandler = selectedYear => {
        SetFilteredyear(selectedYear);
    };


return (
    <div>

        <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}></ExpenseFilter>


        {props.item.map((expense) => 

            <ExpenseItem 
                title={expense.title}
                amount={expense.amount}
                date={expense.date}>
            </ExpenseItem>

        )}

    </div>
);

}

export default Expenses;