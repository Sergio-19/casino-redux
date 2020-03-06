import { GO_POLL, NEXT_YES, NEXT_NO, END_POLL } from "../actions/actionTypes";

const initialState = {
    goPoll: false,
    yesCount: 0,
    noCount: 0,
    currentQuestion: 0,
    endPoll: false,

    questions: ["Вопрос 1", "Вопрос 2", "Вопрос 3", "Вопрос 4", "Вопрос 5", "Вопрос 6", "Вопрос 7"]

}


export default function profileReducer(state = initialState, action){

    switch(action.type){
        case GO_POLL:
        return{
            ...state,
            goPoll: true
        }
        case NEXT_YES:
            
        return{
            ...state,
            yesCount: state.yesCount + 1,
            currentQuestion: state.currentQuestion + 1,
            endPoll: state.currentQuestion > state.questions.length - 2 ? true : state.endPoll,
        }
        case NEXT_NO:
        return{
            ...state,
            noCount: state.noCount + 1,
            currentQuestion: state.currentQuestion + 1,
            endPoll: state.currentQuestion > state.questions.length - 2 ? true : state.endPoll,
        }
        case END_POLL:
        return{
            ...state,
            goPoll: false,
            yesCount: 0,
            noCount: 0,
            currentQuestion: 0,
            endPoll: false,
        }
        default:
        return state
    }
}