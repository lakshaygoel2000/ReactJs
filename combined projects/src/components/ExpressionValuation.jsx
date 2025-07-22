import { useState } from "react";

function calc(){
    
    const [x, setX] =useState("")
    const [y, setY] =useState("")
    const [res, setRes] =useState("")
    
    const valuate= ()=>{
        if(x =="" || y=="") {setRes("Enter valid numbers")}
        else{
            setRes(`${x} > ${y} : ${x>y ? "True" : "False"}`)
        }
        
    }
    return(
        <>
            <h1>Expression Valuation</h1>
            <input type="text" placeholder="Enter expression 1" value={x} onChange={(e)=>setX(e.target.value)} />
            <br />
            <input type="text" placeholder="Enter expression 2" value={y} onChange={(e)=>setY(e.target.value)}/>
            <button onClick={valuate}>Evaluate</button>
            <p>{res}</p>
        </>
    )
}
export default calc;