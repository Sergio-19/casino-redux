import { MODAL_SHOW, MODAL_OFERTA, MODAL_HIDE, MODAL_RECORD_SHOW, MODAL_RECORD_HIDE } from "./actionTypes";

export function modalShowHandler(){

    
        return{
        type: MODAL_SHOW
    } 
      
   

}

export function ofertaShowHandler(){
    return{
        type: MODAL_OFERTA
    }


}

export function modalHideHandler(){
    return{
        type: MODAL_HIDE
    }

}

export function modalRecordShowHandler(){
    return{
        type: MODAL_RECORD_SHOW
    }
}

export function modalRecordHideHandler(){
    return{
        type: MODAL_RECORD_HIDE
    }
}

