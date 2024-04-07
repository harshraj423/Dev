// LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleClick() {
        await axios.post("http://localhost:4000/login",{
            username: username,
            password: password
        }).then((res)=>{
            if(res=="error"){
                window.alert("error")
            }
            else{
                navigate("/home");
            }
        })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className=" h-screen w-screen flex flex-col justify-center items-center ">
            <div>
                <input  className="border-2 border-slate-700 rounded scale-125" placeholder="Username" type="text" name="username" onChange={(e) => setUsername(e.target.value)}></input>
            </div>
            <div className="pt-2">
                <input className="border-2 border-slate-700 rounded scale-125" placeholder="Password" type="text" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="pt-1">
                <button className="border-2 border-slate-700 rounded-md pl-5 pr-5 text-lg bg-indigo-400" onClick={handleClick}>Submit</button>
            </div>
        </div>
        </div>
        
    );
}
