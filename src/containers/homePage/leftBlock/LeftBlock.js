import React from 'react'
import "./leftBlock.scss"
import { Hr } from '../../../components/UI/hr/Hr';

const LeftBlock = (props) =>{

    let cls = {

    allGames: ["allGames"],
    belatra: ["gameItem", "gameItem1", "gameItemBelatra"],
    Easy7: ["gameItem", "gameItem2", "gameItemText"],
    igrosoft: ["gameItem", "gameItem3", "gameItemIgrosoft"],
    megaJack: ["gameItem", "gameItem4", "gameItemJack"],
    novomatic: ["gameItem", "gameItem5", "gameItemNovomatic"],
    playtech: ["gameItem", "gameItem6", "gameItemText"],
    roulette: ["gameItem", "gameItem7", "gameItemText"],
    other: ["gameItem", "gameItem8", "gameItemText"],
    }

    if(props.activeGames){
        cls[props.activeGames].push("blockColor")
    }



    return(
        <div className = "leftBlock">
            <div className = "leftBlockWrap">
                <div className = {cls.allGames.join(' ')} 
                    onClick = {()=>props.gameSearchHandler("allGames")}
                    >
                       <div className = "allGamesWrap"><span>Все игры</span><Hr/></div> 
                        </div>

                <div className = "gamesIcons">
                    <div className = {cls.belatra.join(' ')} 
                    
                    onClick = {()=> props.gameSearchHandler("belatra")}
                    >
                        <div><img src = {props.belatra} alt = 'pic1'/></div> 
                    </div>
                    <Hr/>

                    <div className = {cls.Easy7.join(' ')}
                        
                         onClick = {()=> props.gameSearchHandler("Easy7")}
                         > 
                        <div><span>Easy 7</span></div> 
                    </div>
                    <Hr/>

                    <div className = {cls.igrosoft.join(' ')}
                         
                         onClick = {()=> props.gameSearchHandler("igrosoft")}
                         >
                        <div><img src = {props.igrosoft} alt = 'pic2'/></div> 
                    </div>
                    <Hr/>

                    <div className = {cls.megaJack.join(' ')}
                         
                         onClick = {()=> props.gameSearchHandler("megaJack")}
                         >
                        <div><img src = {props.mega} alt = 'pic3'/></div> 
                    </div>
                    <Hr/>

                    <div className = {cls.novomatic.join(' ')}
                         
                         onClick = {()=> props.gameSearchHandler("novomatic")}
                         >
                        <div><img src = {props.novomatic} alt = 'pic4'/></div> 
                    </div>
                    <Hr/>

                    <div className = {cls.playtech.join(' ')}
                         
                         onClick = {()=> props.gameSearchHandler("playtech")}
                         >
                    <div><span>Playtech</span></div> 
                    </div>
                    <Hr/>

                    <div className = {cls.roulette.join(' ')}
                         
                         onClick = {()=> props.gameSearchHandler("roulette")}
                         >
                        <div><span>Roulette</span></div> 
                    </div>
                    <Hr/>

                    <div className = {cls.other.join(' ')} 
                        
                        onClick = {()=> props.gameSearchHandler("other")}
                        >
                        <div><span>Other</span></div> 
                    </div>
                    <Hr/>
                </div>
            </div>
            
           
        </div>
    )
}



export default LeftBlock