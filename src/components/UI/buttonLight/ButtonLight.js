import React from 'react'
import './buttonLight.scss'


export const ButtonLight = (props) =>{
    if(props.click){
        return(
           
          <button className = "btnLight" onClick = {() => props.click()} >{props.text}</button> 
        )
    }else{
        return(
            <button className = "btnLight" >{props.text}</button> 
        )
    }

    
}


