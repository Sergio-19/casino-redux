import React from 'react'
import './profile.scss'
import { ButtonLight } from '../../components/UI/buttonLight/ButtonLight';
import { Hr } from '../../components/UI/hr/Hr';
import {Link} from 'react-router-dom'
import { CustomCheck } from '../../components/UI/customCheck/CustomCheck';



class Profile extends React.Component{
    constructor(props){
        super(props);

    }



      

    render(){
        
        
        const profile = <div className = "profile">
        <div className = "profileHead">
        <h2>Социальные опросы</h2>
        <Hr/>   
        </div>
        <div className = "profileCheck">
        <div>
        <ButtonLight 
        text = "Начать новый опрос"
        click = {this.props.goPollHandler}
       check = {this.props.check}
        />
        <div className = "profileCheckContent">
        <CustomCheck 
                click = {this.props.checkHandler}
                check = {this.props.check}
                />&nbsp;&nbsp;&nbsp;

            <p><span onClick = {this.props.checkHandler}>&nbsp;Я соглашаюсь с условиями 
            </span><Link to = "/"><strong onClick = {this.props.ofertaShow}>&nbsp;публичной оферты</strong></Link></p>
        </div>
        </div> 
        </div>
        <Hr/> 
        <div className = "profileFoot">
           <div>
             <p><strong>ООО «Ромашка»</strong><br/>ОГРН 1234567891011 ИНН 1234567891 КПП 123456789 Адрес: 100200, г. Москва, ул. Московская, д. 13 Тел.: +7 (495) 123-45-66</p>   
               </div> 
           
        </div>
    </div>

   let  newPoll =  <div className = "profile">
            <div className = "profileHead">
             <h2>Вопрос {this.props.currentQuestion + 1} из {this.props.questions.length}</h2>
            <Hr/>   
        </div>
        <div className = "question">
            <h3>{this.props.questions[this.props.currentQuestion]}</h3>
        </div>
        
        <div className = "btnBlock">
            <ButtonLight
                text = "Да"
                click = {this.props.yesQuestionHandler}
            />
            <ButtonLight
                text = "Нет"
                click = {this.props.noQuestionHandler}
            />
        </div>
        
        </div>
        
        let endPoll = <div className = "profile">
                    <div className = "profileHead">
             <h2>Конец опроса</h2>
                    <Hr/>   
                </div>
                <div className = "pollResult">
                    <h3>Положительных ответов :&nbsp;&nbsp;&nbsp;<span>{this.props.yesCount}</span> </h3>
                    <h3>Отрицательных ответов :&nbsp;&nbsp;&nbsp;<span>{this.props.noCount}</span></h3>
                </div>
                <div className = "btnBlockResult">
                    <Link to = "/">
                    <ButtonLight
                    text = "На главную"
                    click = {this.props.endPollHandler}
                />
                    </Link>
                    
                </div>
                <Hr/>
                <div className = "profileFoot">
           <div>
             <p><strong>ООО «Ромашка»</strong><br/>ОГРН 1234567891011 ИНН 1234567891 КПП 123456789 Адрес: 100200, г. Москва, ул. Московская, д. 13 Тел.: +7 (495) 123-45-66</p>   
               </div> 
           
        </div>
        </div>
    


        return(
            <div className = "profilePage">
                  { !this.props.goPoll ? profile : !this.props.endPoll ?  newPoll : endPoll}  
            </div>
        )
    }
}


export default Profile
