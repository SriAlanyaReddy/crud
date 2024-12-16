import React from 'react'
import { useState,useEffect } from 'react'
import FirstComponent from './propsContainer/FirstComponent';
const UseStateExample = () => {
  const [state,setState]=useState("Hyderabad");
  console.log(state);
  useEffect(()=>{
  if(state!="Hyderabad"){
  setState("Delhi");}
  else{
    setState("banglore");
  }
},[]);
  console.log(state);
  return (
    <div>UseStateExample
    <br/>
    <h1>{state=="Hyderabad"?"hi hello i am from hyderabad":"i am not from hyderabad"}
        I live in {state}</h1>
    <h2>{state=="Hyderabad"?<FirstComponent/>:"i am not from hyderabad"}
    </h2>
        </div>
  )
}

export default UseStateExample;