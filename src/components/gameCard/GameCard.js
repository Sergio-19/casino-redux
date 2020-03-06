import React from "react"
import "./gameCard.scss"
import { ButtonLight } from "../UI/buttonLight/ButtonLight";

export const GameCard = (props) =>{
    return(
        <div className = "gameCard">

        <a href = {props.url} target="_blank">
         <ButtonLight text = {"Играть"} road = "game" />   
        </a>
        
        
        
        <div className = "gameMask"></div>
        <img src = {props.img} alt = "game"/>
        </div>
    )
} 