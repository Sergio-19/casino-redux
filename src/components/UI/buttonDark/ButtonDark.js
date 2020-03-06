import React from 'react'

import './buttonDark.scss'

export const ButtonDark = (props) =>{

    return(
        
        <button className = "btnDark" onClick = {() => props.click(props.type)}>{props.text}</button>
        
        
    )
}