import React from 'react'

const Arryofobject = () => {
const players=[
    {
        hockey:"dyanchnd",
        cricket:"virat",
        football:"ronaldo"
    }
];
  return (
    <div>
      {players.map((player)=>{
        return(
            <div>
                <h1>
                    {players.hockey}
                </h1>
                <h2>
                    {player.cricket}
                </h2>
                <h3>
                    {player.hocker}
                </h3>
            </div>
        );

       })}
       
       
       </div>
  )
}

export default Arryofobject