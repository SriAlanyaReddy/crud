import React from 'react'
import { userData } from './Data'
const Arrayofobjects2 = () => {
  return (
    <div>
        {
            userData.map((user)=>{
                return (
                    <div style={{border:"1px solid blue"}}>
                        <div>{user.name}</div>
                        <div>{user.phone}</div>
                        <div>{user.id}</div>
                        <div>{user.address.city}</div>

                        </div>
                )
            })
        }
    </div>
  )
}

export default Arrayofobjects2;