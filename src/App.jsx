import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
function App() {
  return (
    <div>
      {/* <Greeter name="James" from="Mom"/>
      <Greeter name="Joe" from="Dad"/>
      <Greeter name="Jim" from="Grandma"/> */}
      {/* <Die numSides = {20}/>
      <Die />
      <Die numSides = {2}/> */}
      {/* <ListPicker values ={[1,2,3]} /> */}
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
    </div>
  );
}

export default App
