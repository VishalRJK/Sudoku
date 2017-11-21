export default function gameReducer (state ={r1c1:'',r2c3:'',r3c2:''} ,action) {
    switch(action.type) {   
        case 'START_GAME':
        return {...state,r1c1: Math.floor(1 + Math.random()*9),r2c3: Math.floor(1 + Math.random()*9),r3c2: Math.floor(1 + Math.random()*9)};

        default :
        return state;
    }
}