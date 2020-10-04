import React from 'react'
import "./League.css"
import NavbarUser from "../../navbar/NavbarUser"
import { Link } from 'react-router-dom';

function League(prop) {
    let {
        gameGroup,
        userData        
    } = prop;
    return (
        <div className="LeagueOfLegends">
            <div className="section">
                <NavbarUser userData = {userData}/>
                <div className="LeagueOfLegends-inner">
                    <h2>League of Legends Groups</h2>
                    <div className="LeagueOfLegends-content">
                        <div className="LeagueOfLegends-flex-container">
                            {gameGroup.map((x) => (
                                <div className="LeagueOfLegends-group-card" key={x.discord}>
                                    <img className="LeagueOfLegends-img" src={x.url} alt="group"/>
                                    <div className="group-card-description">
                                        <h4>{x.name}</h4>
                                        <div className="group-card-description-game">
                                            <p>{x.game}</p>
                                        </div>
                                        <p className="group-card-description-p">{x.description}</p>
                                        <div className="group-card-description-join">
                                            <p>Join Group</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default League
{/* <div className = "LeagueOfLegends">
{gameGroup.map((x) => (
<div key = {x.discord}>
    <h2>{x.name}</h2>
    <p>{x.description}</p>
    <img src={x.url} alt="group" width="100" height="100"/>
</div>
))}
</div> */}