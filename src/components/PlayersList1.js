import React from 'react'
import '../styles.css';
function PlayersList1({playerOneSelectionHandler,player,player:{id,player_name,player_wins,player_losses,player_avatar}}) {


    return (
        <div  style={{"border":"solid"}}           >
         <img   style={{"width": "150px"}} src={player_avatar}></img>   
         <h4>{player_name}</h4>
    <button onClick={()=>playerOneSelectionHandler(player)}   >Pick player</button>
 
        </div>
    )
}
    


export default PlayersList1
