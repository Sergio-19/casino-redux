import React from 'react'
import './denomination.scss'
import { Hr } from '../UI/hr/Hr';




export const Denomination = (props) =>{
    let cls = ["denomination"];
    if(props.denominationShow){
        cls.push("denominationShow")
    }

    

    return(
        <div className = {cls.join(' ')}>
            <ul>
                {props.denomArray.map((rate, i)=>{
                    return(
                        <li 
                        onClick = {() => props.rateHandler(rate.id)}
                        key = {i}
                        >
                        <span
                            
                        >{rate.rate}</span><Hr/></li>
                    )
                })}


                {/* <li><Hr/><span>0.01</span><Hr/></li>
                <li><span>0.05</span><Hr/></li>
                <li><span>0.10</span><Hr/></li>
                <li><span>0.50</span><Hr/></li>
                <li><span>2.00</span><Hr/></li>
                <li><span>5.00</span><Hr/></li>
                <li><span>10.00</span><Hr/></li>
                <li><span>100.00</span></li> */}
            </ul>
        </div>
    )
}