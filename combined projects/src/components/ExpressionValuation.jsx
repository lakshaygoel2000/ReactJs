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
        <div className="Output-Container">
            <div style={{display:"flex", flexDirection:"column", justifyContent:"start", width:"400px", gap:"10px"}}>
                <h1>Expression Valuation</h1>
                <input type="text" placeholder="Enter expression 1" value={x} onChange={(e)=>setX(e.target.value)} style={{height:"20px", position:"Relative"}} />
                <br />
                <input type="text" placeholder="Enter expression 2" value={y} onChange={(e)=>setY(e.target.value)} style={{height:"20px", position:"Relative"}}/>
                <button onClick={valuate}>Evaluate</button>
                <p>{res}</p>
            </div>
        </div>
        </>
    )
}
export default calc;