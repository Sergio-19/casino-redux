import React from 'react'
import "./rightBlock.scss"
import { Hr } from '../../../components/UI/hr/Hr';

const RightBlock = (props) =>{
    let cls = []
    if(props.denominationShow){ cls.push("poligonArrow")}
    return(
        <div className = "rightBlock">
            <div className = "score">
                <p>Очки</p>
                <span >{props.score}</span>
                <p>Деноминация</p>
                <span 
                    onClick = {props.denominationHandler}
                    className = "denominationSpan"
                    >{props.denomination}
                    <img src = {props.poligon}
                         className = {cls.join(' ')}
                         alt = "pol1"
                         />
                        
                    </span>
                <Hr/>
            </div>

            <div className = "jackpot">
                <img src = {props.jackpot} alt = "jackpot"/>

                <ul>
                    
                    <li><p><span>Gold</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000</p></li>
                    <li><p><span>Gold</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000</p></li>
                    <li><p><span>Gold</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000</p></li>
                    <li><p><span>Gold</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1000</p></li>
                </ul>
            </div>
            <Hr/>
        </div>
    )
}



export default RightBlock