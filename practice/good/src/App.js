
import './App.css';
import { useState } from "react"

function App(){
    const [counter, setCounter] = useState(0)
    return (
        <div>
           <button onClick={()=>setCounter(prev=>prev-1)} >-</button>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(prev=>prev+1)} >+</button>

            {/* <Persons/>
            <Form/> */}
        </div>
    )
}
export default App
