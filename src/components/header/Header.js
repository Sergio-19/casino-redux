import React, {Fragment} from 'react'
import './header.scss'
import { ButtonDark } from '../UI/buttonDark/ButtonDark';
import { ButtonLight } from '../UI/buttonLight/ButtonLight';
import {Link} from 'react-router-dom'






export const Header = (props) =>{
    return(
        <Fragment>
        <header>
                    
                    <div className = "headLeft">
                   
                   <Link to = "/"><img src = {props.logo} alt = "logo"/></Link> 
                    </div>
                    
                    
                    <div className = "headCenter">
                       
                        <img src = {props.headBanner} alt = "banner"/>
                    </div>
                    <div className = "headRight">
                        <div className = "headRightBut">
                        <Link to = "/">
                        <ButtonDark
                            text = "Правила"
                            click = {props.modalShowHandler}
                            type = "regul"
                        />
                        </Link>
                        <Link to = "/">
                        <ButtonDark
                            text = "Оферта"
                            click = {props.ofertaShowHandler}
                            type = "offer"
                        />
                        </Link>
                        </div>
                        <div className = "headRightProfile">
                         <Link to = "/profile">
                       <ButtonLight
                        text = "Пройти опрос"
                        
                        /> 
                       </Link>   
                        </div>
                       
                    
                    </div>
                
            

        </header>
        <hr/>
        </Fragment>
    )
}