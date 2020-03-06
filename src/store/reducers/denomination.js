import { RATE_ID, DENOM_SHOW } from "../actions/actionTypes";

const initialState = {

    denomination: "1.00",
    denomArray: [ {rate: "1.00", id: "1.00"},
                  {rate: "0.01", id: "0.01"},
                  {rate: "0.05", id: "0.05"},
                  {rate: "0.10", id: "0.10"}, 
                  {rate: "0.50", id: "0.50"}, 
                  {rate: "2.00", id: "2.00"}, 
                  {rate: "5.00", id: "5.00"}, 
                  {rate: "10.00", id: "10.00"}, 
                  {rate: "100.00", id: "100.00"}],
    denominationShow: false              
}

export default function denominationReducer(state = initialState, action){
    switch(action.type){
        case RATE_ID:
        return{
            ...state, 
            denomination: action.rateId,
            denominationShow: false 
        }

        case DENOM_SHOW:
        return{
            ...state,
            denominationShow: !state.denominationShow
        }

        default: 
        return state
    }

}