import React from 'react'
import {useState,useEffect} from 'react'
const ClickEvent = () => {
    const [count,setCount]=useState(0);
  return (
    <div>ClickEvent
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}

export default ClickEvent;