import { CHECK_SHOW, END_POLL } from "../actions/actionTypes";


const initialState = {
    check: false,
    
}


export default function checkReducer(state = initialState, action){
    switch(action.type){
        case CHECK_SHOW:
        return{
            check: !state.check
        }
        case END_POLL:
        return{
            check: false
        }

        default:
        return state
        
    }
}