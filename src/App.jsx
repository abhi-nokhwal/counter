import react, { useState } from "react";
import "./App.css";

 function App() {
  
  const [counter, setCount] = useState(0);
  const Incriment = () => {
    setCount(counter + 1)
    let Green = document.querySelector('#h').classList;
    Green.add("hari");
    Green.remove('baseclass', 'laal');
    
  }
  const Decriment = () => {
    setCount(counter - 1)
    let Red = document.querySelector('#h').classList;
    Red.add("laal");
    Red.remove('baseclass', 'hari');
  }
  

    return (
      <>
        <h1 className="heading">COUNTER</h1>
        <div className="container">

          <h1 id="h" className="baseclass">{counter}</h1>
          <div className="wrapper">
            <button className="btn1" onClick={Incriment}> Incriment</button>
            <button className="btn2" onClick={Decriment}>Decriment</button>
            <p className="p">press on buttons to increase or decrease the counter value</p>
          </div>
        </div>
      </>    
      
    )
}
  export default App