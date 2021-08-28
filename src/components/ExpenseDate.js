function ExpenseDate(props){

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(

        <div className="w-30  ">
            <div className="w-50 rounded-lg  text-white py-2 bg-black border-1 border-white mx-auto">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
           
        </div>

    );
};

export default ExpenseDate;