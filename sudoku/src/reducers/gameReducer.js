
const initialState={r1c1:'',r1c2:'',r1c3:'',r2c1:'',r2c2:'',r2c3:'',r3c1:'',r3c2:'',r3c3:''};
var random1 ='',random2='',random3='';

export default function gameReducer (state = initialState ,action) {
    switch(action.type) {   
        case 'START_GAME':
        do {
          random1=Math.floor(1 + Math.random()*9);
          random2=Math.floor(1 + Math.random()*9);
          random3=Math.floor(1 + Math.random()*9);
        }while (random1 == random2 || random2 == random3 || random1 == random3);
        return {...state,r1c1: random1,r2c3: random2,r3c2: random3};
        
        case 'SET_VALUE':
        debugger;
        let id = action.id;
        let value = action.value; 
        return {...state,r1c1: random1,r2c3: random2,r3c2: random3,[id]: value};

        default :
        return state;
    }
}