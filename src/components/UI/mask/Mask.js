import React from 'react'
import './mask.scss'


export const Mask = (props) =>{
    const cls = ["mask"]
    if(props.modalShow || props.modalRecordShow || props.ofertaShow){cls.push("show")}
    return(
        <div className = {cls.join(' ')}>
        </div>
    )
}