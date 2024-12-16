import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData]=React.useState({
        name:'',
        password:''
    })
    const navigate=useNavigate();
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.id]:e.target.value});
    }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('Form Data Submitted:',formData);
   navigate('/login',{state:formData});
   
  }
  return (
    <div>
        <h1>You are currently in signup page</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" id="name"
            value={formData.name}
            onChange={handleChange}
            required/>
            <input type="password" placeholder="Enter your password" id="password"
            value={formData.password}
            onChange={handleChange}
            required/>
        <button type="submit">Submit</button>
             
        </form>


    </div>
  )
}

export default Signup