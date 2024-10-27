import Slots from "./Slots";
import "./App.css";
import ShoppingList from "./ShoppingList";

const data = [
  {id: 1, item: "eggs", quantity: 12, completed: false},
  {id: 2, item: "milk", quantity: 1, completed: true},
  {id: 3, item: "chicken breasts", quantity: 4, completed: false},
  {id: 4, item: "carrots", quantity: 6, completed: true},
]

function App() {
  return (
    <div>
      <ShoppingList items={data}/>
      {/* <Slots val1="7" val2="7" val3="7"/>
      <Slots val1="2" val2="1" val3="2"/>
      <Slots val1="3" val2="7" val3="6"/> */}
    </div>
  );
}

export default App
