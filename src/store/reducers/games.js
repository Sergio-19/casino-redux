
import banana from "../../images/games/banana.png"
import bookOf from "../../images/games/bookOf.png"
import corn from "../../images/games/corn.png"
import dolphin from "../../images/games/dolphin.png"
import monkey from "../../images/games/monkey.png"
import { GAME } from "../actions/actionTypes";




const initialState = {

    activeGames: "allGames",  

    games: {"allGames": [ {img: bookOf,
                           url: 'https://igrovyeavtomatybesplatno777.com/books-of-ra'
                        }, 
                        { img: corn,
                          url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                        },
                        { img: dolphin,
                          url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                        },
                        { img: monkey,
                          url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                        },
                        { img: banana,
                          url: 'https://igrovyeavtomatybesplatno777.com/banans-go-bahamas'  
                        },
                        { img: dolphin,
                            url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                          },
                          { img: corn,
                            url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                          }, 
                          { img: monkey,
                            url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                          }, 
                          {img: bookOf,
                            url: 'https://igrovyeavtomatybesplatno777.com/books-of-ra'
                         },
                         { img: dolphin,
                            url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                          },
                          { img: banana,
                            url: 'https://igrovyeavtomatybesplatno777.com/banans-go-bahamas'  
                          },
                          { img: corn,
                            url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                          },
                          {img: bookOf,
                            url: 'https://igrovyeavtomatybesplatno777.com/books-of-ra'
                         }, 
                         { img: corn,
                            url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                          },
                    ],

                "belatra": [{ img: banana,
                              url: 'https://igrovyeavtomatybesplatno777.com/banans-go-bahamas'  
                            },
                             { img: corn,
                                url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                            },
                            {img: bookOf,
                            url: 'https://igrovyeavtomatybesplatno777.com/books-of-ra'
                            }, 
                            { img: corn,
                            url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                            },],

                "Easy7": [{ img: monkey,
                            url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                            },
                            { img: banana,
                            url: 'https://igrovyeavtomatybesplatno777.com/banans-go-bahamas'  
                            },
                            { img: dolphin,
                              url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                            },],

                "igrosoft": [{ img: monkey,
                                url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                            },
                            { img: banana,
                             url: 'https://igrovyeavtomatybesplatno777.com/banans-go-bahamas'  
                             },
                            { img: dolphin,
                              url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                             },
                            { img: corn,
                             url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                            }, 
                            { img: monkey,
                             url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                             }, ],

                "megaJack": [{ img: dolphin,
                                url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                             },
                                { img: monkey,
                                url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                            },],

                "novomatic": [{ img: monkey,
                                url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                                },
                                { img: banana,
                                 url: 'https://igrovyeavtomatybesplatno777.com/banans-go-bahamas'  
                                },
                                { img: dolphin,
                                    url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                                },
                                { img: corn,
                                 url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                                },],

                "playtech": [{ img: corn,
                                url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                            }, 
                            { img: monkey,
                                url: 'https://igrovyeavtomatybesplatno777.com/crazy-monkey'  
                            }, 
                             {img: bookOf,
                                url: 'https://igrovyeavtomatybesplatno777.com/books-of-ra'
                            },],

                "roulette": [{img: bookOf,
                              url: 'https://igrovyeavtomatybesplatno777.com/books-of-ra'
                            }, 
                            { img: corn,
                             url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                            },
                            { img: dolphin,
                                url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                               },
                               { img: banana,
                                url: 'https://igrovyeavtomatybesplatno777.com/banans-go-bahamas'  
                               } ],

                "other": [{img: bookOf,
                            url: 'https://igrovyeavtomatybesplatno777.com/books-of-ra'
                            }, 
                        { img: corn,
                         url: 'https://igrovyeavtomatybesplatno777.com/unicorn-magic'
                        },
                        { img: dolphin,
                         url: 'https://igrovyeavtomatybesplatno777.com/dolphins-pearl'  
                        },],
                            }
                        }


export default function gamesReducer(state = initialState, action){

    switch(action.type){
        case GAME:
        return{
            ...state,
            activeGames: action.gameId
        }


        default:
        return state
        
    }
}