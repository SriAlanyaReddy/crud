import React from 'react'
const Mango=()=>{
    return (
        
           <h1>nested Component</h1>
      
    )
}
const Grapes=()=>{
    return (
        <div className="grapes-text"><h2>grapes are good</h2> </div>
        
    )
}
function Sample() {
  return (
    <div>Sample <h2>nnn</h2>
        <Mango/>
        <Grapes/>
    </div>
  )
}

export default Sample;