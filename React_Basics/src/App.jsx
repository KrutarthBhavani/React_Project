import { useState } from "react";





function App() {
  let [counter, setCounter] = useState(0)
  const AddValue = () =>{
    if(counter>=20) {counter = 19}
    counter = counter + 1 ;
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter<=0) {counter = 1}
    counter = counter - 1;
    setCounter(counter)
  }
  return (
    <>
    <h1> Krutarth Counter</h1>
    <button onClick={AddValue}>Addition : {counter}</button>
    <button onClick={removeValue}>Subtraction : {counter}</button>
    <h3>Answer : {counter}</h3>
    </>
  )
}

export default App