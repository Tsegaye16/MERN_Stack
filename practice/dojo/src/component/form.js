import React from "react";
import { useState } from "react";
import "./style.css"
function Form(){
    let [name, setName] = useState("")
    let [email, setEmail]=useState("")
    let [id, setId]=useState("")
    function handleName(event){
        
        setName(event.target.value)
    }
    function handleemail(event){
        
        setEmail(event.target.value)
    }
    function handleId(event){
       
        setId(event.target.value)
    }
    return (
        <form>

            <table  >
                <tr>
                    <th>names</th>
                    <th>E-mails</th>
                    <th>Id</th>
                </tr>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{id}</td>
                </tr>
            </table>
            <div>           
            
            
                <label>UserNAme</label>
                <h1>{name}</h1>
                <input type="text" value={name} onChange={handleName} name="username" ></input>
                <label>E-mail</label>
                <input type="email" value={email} onChange={handleemail}></input>
                <label>ID</label>
                <input type="text" value={id} onChange={handleId}></input>
            </div>
        </form>
    )

}
export default Form