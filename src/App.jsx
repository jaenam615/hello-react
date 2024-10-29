import Slots from "./Slots";
import "./App.css";
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import ToggleCounter from "./ToggleCounter";
import ColorBox from "./ColorBox";
import Tiles from "./Tiles";
// const data = [
//   {id: 1, item: "eggs", quantity: 12, completed: false},
//   {id: 2, item: "milk", quantity: 1, completed: true},
//   {id: 3, item: "chicken breasts", quantity: 4, completed: false},
//   {id: 4, item: "carrots", quantity: 6, completed: true},
// ]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];


const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet"
]

function App() {
  return (
    <div>
      <Tiles colors = {colors}/>
      {/* <ColorBox colors={colors}/> */}
      {/* <ToggleCounter /> */}
      {/* <PropertyList properties={properties}/>
      <Form />
      <Clicker message="HI!!!!" buttonText="Please Click Me"/>
      <Counter /> */}
    </div>
  );
}

export default App
