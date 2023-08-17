import axios from "axios"
import { SIGNIN_SUCCESS, SIGNUP_SUCCESS } from "./actiontypes"



export const signup=(ob)=>(dispatch)=>{

   return  axios.post(`https://determined-gold-jaguar.cyclic.app/users1`,ob)
    .then((res)=>{
        dispatch({type:SIGNUP_SUCCESS,payload:res.data})
    })
}

export const signin=async(dispatch)=>{

   return  axios.get(`https://determined-gold-jaguar.cyclic.app/users1`)
    .then((res)=>{
        dispatch({type:SIGNIN_SUCCESS,payload:res.data})
    })
}