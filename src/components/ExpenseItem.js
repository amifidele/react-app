import '../css/style.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    return (
        <div className="w-90 rounded my-2 bg-grey-darker mx-auto">
            <div className="w-100 text-center font-bold flex rounded shadow py-4 px-8">
               <ExpenseDate date={props.date}></ExpenseDate>
               <div className="w-30 pt-4">
                    <p>{props.title}</p>
               </div>
               <div className="w-40 pt-6">
                    <button className="btn bg-white rounded shadow-2xl"> ${props.amount} </button>
                  
               </div>
            </div>
        </div>
    );
}

export default ExpenseItem;