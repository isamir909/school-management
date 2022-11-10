import  { useState } from "react";
import "./Login.css"
import axios from "axios"
import { useNavigate  } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login=()=>{
    axios.post("http://localhost:3001/login/teacher",{
      email:String(email),
      password:String(password),
  })
  .then((data)=>{
    console.log(data.data);
    if(data.data.status===true){
      // alert("login successful")
      window.localStorage.setItem("jwt",data.data.token)
      console.log();
      navigate(`${data.data.id}/studentDetails` ) 
      // window.location.href="./studentDetails"
    }
  })
  .catch((error)=>{alert(error.response.data.message);})
}


  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    login()
  };

  return (
    <div className="container">
      <form   onSubmit={handleSubmit}  >
        <div className="form_content">
          <h3>LOGIN</h3>
          <br/>
          <br/>
          <label>email</label>
          <input
            value={email}
           
            type={"email"}
          
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Enter Email"}
          ></input>
          <label>Password </label>
          <input
            value={password}
            type={"password"}
            
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Enter password"}
          ></input>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};
export default Login;
