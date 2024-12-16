import React, { useState } from 'react'
import {ToastContainer,toast}from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const Form = () => {
    const [userName,setUserName]=useState("");
    const [newuserdetails,setuserdetails]=useState("");
    const getUserName=(e)=>{
        console.log(e.target.value);
        setUserName(e.target.value);
    }
    const notify=()=>toast("wow so easy");
    const userDetails=(e)=>{
        e.preventDefault();
        setuserdetails(userName);
        alert("uploaded successfully");
        notify();
    }
  return (
   <section className="formSection">
    <h2>hello {newuserdetails}</h2>
    <ToastContainer/>

    <div className='inputdiv'>
        <form onSubmit={userDetails}>
      <input type="text" placeholder='Enter your text' onChange={getUserName}/>
      <br/>

      <button type="submit"  onClick={userDetails}>Submit</button>
      </form>  
          </div>
         
   </section>
  )
}

export default Form