import React from 'react'
import './recordBlock.scss'
import { ButtonLight } from '../UI/buttonLight/ButtonLight';



export const RecordBlock = (props) =>{
    let cls = ["recordBlock"]
    if(props.score > 0 && props.modalRecordShow === false){ cls.push("showRecordBlock")}
    return(
     <div className = {cls.join(' ')}>
        <ButtonLight
            text = "Сохранить рекорд"
            click = {props.modalRecordShowHandler}

        />
    </div>   
    )
    
}

