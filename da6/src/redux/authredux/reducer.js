import { SIGNIN_SUCCESS, SIGNUP_SUCCESS } from "./actiontypes"

const initstate={
    isAuth:false,
    user:[]
}

export const reducer=(state=initstate,{type,payload})=>{

switch(type){
    case SIGNUP_SUCCESS:{
        return {
            ...state,isAuth:false,user:payload
        }
    }
    
    case SIGNIN_SUCCESS:{
        return {
            ...state,isAuth:true,user:payload
        }
    }
    default:{
        return state
    }

    
}

}