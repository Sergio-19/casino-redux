import { GAME } from "./actionTypes";


export function gameSearchHandler(gameId){
    return{
        type: GAME,
        gameId
    }
}