import Greeting from "./Greeting";
import Counter from "./Counter";
function App(){
  return(
    <div className="App">
<h1>Hello</h1>
<Greeting name="Leila" city="Dallas"/>
<Counter startingCount={7}/>

    </div>
  )
}
export default App;