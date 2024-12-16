import React,{useState} from 'react';
import { useNavigate,useLocation} from 'react-router-dom';

const Login = () => {
    const [formData,setFormData]=useState({
        name:"",
        password:""
    })
    const location=useLocation();
    //destructioing
    const {name,password}=location.state||{};
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/about");
    }
    const handleLogin=()=>{
        //i want to check if user details in singup are asme as login details
        if(formData.name==name && formData.password==password){
            alert("successfully logged in");
         navigate("/");
        }
        else{
            alert("Invalid username or password");
        }
    }
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
  return (
    <div>
        <h1>you are in login page hi!</h1>
        <h2>hello hi {name} your password is {password}</h2>
        <input type="text" id="name" placeholder="your name" value={formData.name}
        onChange={handleChange} required/>
        <input type="password" id="password" placeholder="your password" value={formData.password} onChange={handleChange} required/>
        <button type="submit" onClick={handleLogin}>login button</button>
        
        <button type="button" onClick={handleClick}>Click it go to about page</button>
    </div>
  )
}

export default Login