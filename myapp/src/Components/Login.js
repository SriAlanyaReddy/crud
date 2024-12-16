import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const Login = () => {
    const location=useLocation();
    //destructioing
    const {name,password}=location.state||{};
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate("/about");
    }
  return (
    <div>
        <h1>you are in login page hi!</h1>
        <h2>hello hi {name} your password is {password}</h2>
        <button type="button" onClick={handleClick}>Click it go to about page</button>
    </div>
  )
}

export default Login