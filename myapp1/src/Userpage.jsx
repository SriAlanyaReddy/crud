import React, { useState,useEffect} from 'react'
const url="https://jsonplaceholder.typicode.com/posts";
const Userpage = () => {
    const [user,setUser]=useState([]);
    const userHandler=async()=>{
        const response=await fetch(url);
        const newdata=await response.json();
        setUser(newdata);
    } 
    useEffect(()=>{
        console.log(userHandler());
    },[])
   console.log(user)
  return (
    <div>
        {user.map((u)=>{
            return(
                <div className="userSection">
                   <h1 style={{color:"blue"}}> {u.title}</h1>
                    <h2 style={{color:"yellow"}}>{u.id}</h2>
                    <h3 style={{color:"pink"}}>{u.body}</h3>
                </div>
            )
        })
        }

    </div>
  )
}

export default Userpage