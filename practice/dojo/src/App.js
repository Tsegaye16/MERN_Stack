//import Persons from "./component/list"
import React from "react"
//import Form from "./component/form"
import { useState } from "react"

function App(){
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button>-</button>
            <h1>{counter}</h1>
            <button>+</button>

            {/* <Persons/>
            <Form/> */}
        </div>
    )
}
export default App