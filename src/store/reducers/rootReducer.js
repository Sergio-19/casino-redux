
import {combineReducers} from 'redux'
import denominationReducer from './denomination'
import scoreReducer from './score';
import modalRegulOfferReducer from './modalRegulOffer';
import checkReducer from './check';
import gamesReducer from './games';
import profileReducer from './profile';

export default combineReducers({
    denomination: denominationReducer,
    score: scoreReducer,
    modal: modalRegulOfferReducer,
    check: checkReducer,
    games: gamesReducer,
    profileState: profileReducer,

})