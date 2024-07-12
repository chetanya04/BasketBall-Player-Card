import React from "react";


const BasketballCard = ({name,image,position,stats})=>{
    return(
        <div className="player-card">
            <img src={image} alt={name} className="player-image" />
            <div className="player-name">{name}</div>
            <div className="player-position">{position}</div>
            <div className="player-stats">
                <p>Points Per Game {stats.pointsPerGame}</p>
                <p>Points Per Game {stats.assistsPerGame}</p>
                <p>Points Per Game {stats.reboundsPerGame}</p>
            </div>
        </div>
    )
}

export default BasketballCard;