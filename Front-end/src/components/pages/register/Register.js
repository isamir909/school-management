import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Register=()=>{
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
    
  
    const createData=async()=>{
        axios.post("http://localhost:3001/register/teacher",{
            name:String(name),
            email:String(email),
            password:String(password),
            confirmPassword:String(password)
        }).then((res)=>{alert("user created ")})
          .catch((error)=>{alert(error.response.data.message);})
      }


    const handleSubmit=async(e)=>{
        e.preventDefault()
        e.stopPropagation()
        createData()
    }
   
    return (

        <div>
            <form onSubmit={handleSubmit}>
            <label>Name</label>  
            <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder={"Enter Name"}></input> 

             <label>Email</label>   
             <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder={"Enter Email"}></input> 

             <label>Password</label>   
             <input value={password}   onChange={(e)=>setPassword(e.target.value)}type="password" placeholder={"Enter password"}></input> 

             <label>Confirm Password</label>  
             <input value={confirmPassword} typ  onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="enter password again"></input>  

             <button>Submit</button>

            </form>
            
           
        </div>



    )
}
export default Register