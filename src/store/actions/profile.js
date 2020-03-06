import { GO_POLL, NEXT_YES, NEXT_NO, END_POLL } from "./actionTypes";


export function goPollHandler(){
    return{
        type: GO_POLL
    }
}

export function yesQuestionHandler(){
    return{
        type: NEXT_YES
    }
}

export function noQuestionHandler(){
    return{
        type: NEXT_NO
    }
}

export function endPollHandler(){
    return{
        type: END_POLL
    }
}