import { MODAL_SHOW, MODAL_OFERTA, MODAL_HIDE, MODAL_RECORD_SHOW, MODAL_RECORD_HIDE } from "../actions/actionTypes";


const initialState = {
    modalShow: false,
    ofertaShow: false,
    modalRecordShow: false,
}

export default function modalRegulOfferReducer(state = initialState, action){

    switch(action.type){

        case MODAL_SHOW:
            return{
                    ...state, modalShow: true
            }
        case MODAL_OFERTA:
            return{
                ...state, ofertaShow: true
            }    
        case MODAL_HIDE:
            return{
                ...state,
                 modalShow: false,
                 ofertaShow: false   
            }   
            
        case MODAL_RECORD_SHOW:
        return{
            ...state,
            modalRecordShow: true,

        }    
        case MODAL_RECORD_HIDE:
        return{
            ...state,
            modalRecordShow: false,
        }
        default:
        return state
    }
}