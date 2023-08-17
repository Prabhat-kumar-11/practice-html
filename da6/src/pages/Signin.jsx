import { Box, Button, FormControl, Input, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signin, signup } from '../redux/authredux/action'


const Signin = () => {


const [email,setemail]=useState("")
const [password,setpassword]=useState("")

const dispatch=useDispatch()

const state=useSelector((state)=>state.AuthReducer.user)
//console.log(state)


useEffect(()=>{
dispatch(signin)
},[])

const handlesubmit=(e)=>{
e.preventDefault()
console.log(email,password)
let filtered=state.filter((el)=>el.email==email && el.password==password)

if(filtered.length>0){
    alert(`login successful  ${filtered[0].username}`)
}else{
    alert(`login Failed`)
}

console.log(filtered)

}

  return (
    <Box w="50%" margin={"auto"}>
      <form  mt="10%" onSubmit={handlesubmit}>               
        <Input name="email" type="email" placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} />
        <Input name="password" type="password" placeholder='Enter Your Password'  onChange={(e)=>setpassword(e.target.value)}/>
        <Button type="submit" bg="black" color="white">SignUp</Button>
      </form>
    </Box>
  )
}

export default Signin
