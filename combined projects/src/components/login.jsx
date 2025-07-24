import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Details from "./defectdetails";
import '../styles/login.css'
function Login(){
    const[UserName, setUserName] = useState("")
    const[Password, setPassword] = useState("")
    const[error, setError] = useState("")

    const navigate = useNavigate();
    const data = {
        username : "lakshay",
        password : "1234"
    }

    const handleLogin = () =>{
        if(UserName === data.username && Password === data.password){
            navigate("/details")
        }
        else{
            setError("Invalid username or password")
        }
    }

    return(
        <>
            <div className="Output-Container">
                <form className="LoginForm">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={UserName}
                        onChange={(e)=>setUserName(e.target.value)}
                        placeholder="Enter Username"
                    ></input>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={Password}
                        onChange={(e)=>setPassword(e.target.value)}
                        onKeyPress={(e)=>e.key === "Enter" ? handleLogin() : null}
                        placeholder="Enter Password"
                    ></input>
                    <button type="button" onClick={handleLogin}>Login</button>
                    {error && <p style={{color:"red"}}>{error}</p>}
                </form>
            </div>
        </>
    )
}
export default Login