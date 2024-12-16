import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate();
    const goback=()=>{
        navigate(-1);
    }
  return (
    <div>
        <h1>you are in about page</h1>
        <button type="button" onClick={goback}>Go back</button>
    </div>
  )
}

export default About