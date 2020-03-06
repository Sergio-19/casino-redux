
import React from 'react'
import "./customCheck.scss"


export const CustomCheck = (props) =>{
    

    let cls = ["customCheck"];
    if(props.check){ cls.push("checkTrue")}
    console.log(props.check)
return(
    <div 
    className = {cls.join(' ')}
    onClick = {props.click}
    ><i className= "fa fa-check"/></div>
)

}