import React from 'react';
import './App.scss';
import Home from './containers/homePage/HomePage';
import { Header } from './components/header/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {connect} from 'react-redux'

//img import
import headBanner from "./images/headBanner.png"
import logo from "./images/LOGO1.png"

import belatra from "./images/left/belatra.png"
import igrosoft from "./images/left/igrosoft.png"
import mega from "./images/left/mega.png"
import jackpot from "./images/left/jackpot.png"
import novomatic from "./images/left/novomatic.png"
import play from "./images/left/play.png"
import poligon from "./images/left/poligon.png"

import Profile from './containers/profilePage/Profile';
import { rateHandler, denominationHandler } from './store/actions/denomination';
import { modalShowHandler, ofertaShowHandler, modalHideHandler, modalRecordHideHandler, modalRecordShowHandler } from './store/actions/modalRegulOffer';
import { checkHandler } from './store/actions/check';
import { gameSearchHandler } from './store/actions/games';
import { goPollHandler, yesQuestionHandler, noQuestionHandler, endPollHandler } from './store/actions/profile';

// https://nge.su/json



class App extends React.Component {

  render(){
    
    
    return (
      <BrowserRouter>
      
      <div className = "app">
        <Header 
          headBanner = {headBanner}
          logo = {logo}
          modalShowHandler = {this.props.modalShowHandler}
          ofertaShowHandler = {this.props.ofertaShowHandler}
        />

        <div className = "exp"></div>
        

      <div className = "content">
      <Switch>
      <Route path="/" exact render={(props) => <Home
        games = {this.props.games}
        activeGames = {this.props.activeGames}
        gameSearchHandler = {this.props.gameSearchHandler}

        belatra = {belatra}
        igrosoft = {igrosoft}
        mega = {mega}
        jackpot = {jackpot}
        novomatic = {novomatic}
        play = {play}
        poligon = {poligon}
        
        activeGames = {this.props.activeGames}
        modalShow = {this.props.modalShow}
        ofertaShow = {this.props.ofertaShow}
        modalHideHandler = {this.props.modalHideHandler}
        
        score = {this.props.score}
        
        modalRecordShow = {this.props.modalRecordShow}
        modalRecordShowHandler = {this.props.modalRecordShowHandler}
        modalRecordHideHandler = {this.props.modalRecordHideHandler}
        denominationHandler = {this.props.denominationHandler}
        denominationShow = {this.props.denominationShow}
        denomination = {this.props.denomination}
        denomArray = {this.props.denomArray}
        rateHandler = {this.props.rateHandler}
         />}/>

        <Route path="/profile"  render={(props) => <Profile 
          ofertaShow = {this.ofertaShow }
          checkHandler = {this.props.checkHandler}
          check = {this.props.check}
          goPoll = {this.props.goPoll}
          goPollHandler = {this.props.goPollHandler}
          yesCount = {this.props.yesCount}
          noCount = {this.props.noCount}
          currentQuestion = {this.props.currentQuestion}
          questions = {this.props.questions}
          yesQuestionHandler = {this.props.yesQuestionHandler}
          noQuestionHandler = {this.props.noQuestionHandler}
          endPoll = {this.props.endPoll}
          endPollHandler = {this.props.endPollHandler}
        />}/>
       
      </Switch>
      
      </div>
      
      </div>
      
      </BrowserRouter>
    );
  }
 
}

  function mapStateToProps(state){
    return{
      denomination: state.denomination.denomination,
      denomArray: state.denomination.denomArray,
      denominationShow: state.denomination.denominationShow,
      score: state.score.score,
      modalShow: state.modal.modalShow,
      ofertaShow: state.modal.ofertaShow,
      modalRecordShow: state.modal.modalRecordShow,
      check: state.check.check,
      activeGames: state.games.activeGames,
      games: state.games.games,
      goPoll: state.profileState.goPoll,
      yesCount: state.profileState.yesCount ,
      noCount:state.profileState.noCount,
      currentQuestion: state.profileState.currentQuestion,
      questions: state.profileState.questions,
      endPoll: state.profileState.endPoll,

    
    }
  }

  function mapDispatchToProps(dispatch){
    return{
      rateHandler: (rateId) => dispatch( rateHandler(rateId)),
      denominationHandler: () => dispatch ( denominationHandler()),
      modalShowHandler: () => dispatch (modalShowHandler()),
      ofertaShowHandler: () => dispatch (ofertaShowHandler()),
      modalHideHandler: () => dispatch (modalHideHandler()),
      modalRecordShowHandler: () => dispatch (modalRecordShowHandler()),
      modalRecordHideHandler: () => dispatch (modalRecordHideHandler()),
      checkHandler: () => dispatch (checkHandler()),
      gameSearchHandler: (gameId) => dispatch (gameSearchHandler(gameId)),
      goPollHandler: () => dispatch (goPollHandler()),
      yesQuestionHandler: () => dispatch (yesQuestionHandler()),
      noQuestionHandler: () => dispatch (noQuestionHandler()),
      endPollHandler: () => dispatch (endPollHandler()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)
