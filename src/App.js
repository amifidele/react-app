import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Expenses from './components/Expenses';
import NewExpense from './components/newExpense/NewExpense';
import ExpenseFilter from './components/ExpenseFilter';


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },

  ];

  return (
    <div className="w-100 px-4 text-center">

        <div className="w-55 mx-auto px-4 py-2 bg-blue-light my-4 rounded">
          <NewExpense></NewExpense>
        </div>
      

        <div className="w-55 rounded shadow-xxl mx-auto py-5 bg-black">
            <Expenses item={expenses}></Expenses>
        </div>

        

    </div>
   

  );
}

export default App;
