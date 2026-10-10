import Lottery from "./Lottery.jsx";
import './App.css';
import Ticket from "./Ticket.jsx";
import {sum} from "./helper.js";

function App() {

  let winCondition=(ticket)=>{
    return ticket[0] === 0;
   };
  return (
  <>
    <Lottery n={3} winCondition={winCondition}/>
  </>
    

  )
}

export default App;
