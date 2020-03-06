import React from 'react'
import './modalRecord.scss'
import { Hr } from '../UI/hr/Hr';
import { ButtonLight } from '../UI/buttonLight/ButtonLight';
import {Link} from 'react-router-dom'


export const ModalRecord = (props) =>{
            let cls = ["modalRecord"]
            if(props.modalRecordShow){ cls.push("showModalRecord")}
    return(
        <div className = {cls.join(' ')}>
            <i className = "fa fa-times" aria-hidden="true" onClick = {props.modalRecordHide}/>
            <div className = "modalRecordWrap">
                <div className = "modalRecordHead">
                <h2>Рекорды</h2>
                 </div>

                <div className = "modalRecordContent">
                <ul>
                    <li><p><span>1 место</span><span>1000 очков</span></p><Hr/></li>
                    <li><p><span>2 место</span><span>700 очков</span></p><Hr/></li>
                    <li><p><span>3 место</span><span>500 очков</span></p><Hr/></li>
                    <li><p><span>4 место</span><span>300 очков</span></p><Hr/></li>
                    <li><p><span>98 место</span><span>105 очков</span></p><Hr/></li>
                    <li><p><span>99 место</span><span>100 очков</span></p><Hr/></li>
                    <li><p><span>100 место</span><span>80 очков</span></p></li>
                </ul>
                
                </div>
                <div className = "modalRecordFoot">
                    <Link to = "/profile"><ButtonLight  
                    click = {props.modalRecordHide}
                    text = "Пройти опрос"/></Link>
                    
                </div>
            </div>

        
        
        </div>
    )
}