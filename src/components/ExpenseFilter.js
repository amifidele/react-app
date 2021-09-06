

function ExpenseFilter(props){

    const dropdownChangeHandler = (event) => {

        props.onchangeFilter(event.target.value);

    }

    return (
        <div className="flex">

            <div className="w-70 text-left pl-8 text-white ">
        	    <span className="text-lg">Filter Year</span>
            </div>

            <div className="w-30 text-right pr-8">
                <select value={props.selected} onChange={dropdownChangeHandler} className="form-input">
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;