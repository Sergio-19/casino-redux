import { RATE_ID, DENOM_SHOW } from "./actionTypes";


export function rateHandler(rateId){
    return{
        type: RATE_ID,
        rateId
    }
}


export function denominationHandler(){
    return{
        type: DENOM_SHOW
    }
}