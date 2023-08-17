import { Box, Button, FormControl, Input, Select } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../redux/authredux/action'
import { useNavigate } from 'react-router-dom'

const init={
  username:"",
  password:"",
  avatar:"",
  email:""
}

const Signup = () => {

const [data,setdata]=useState(init)

const dispatch=useDispatch()

// const state=useSelector((state)=>state)
// console.log(state)
const navigate=useNavigate()


const handleChange=(e)=>{
  const {name,value}=e.target
setdata({...data,[name]:value})

}

const handlesubmit=(e)=>{
e.preventDefault()
console.log(data)
dispatch(signup(data)).then((res)=>{
  navigate("/login")
})

}

  return (
    <Box w="50%" margin={"auto"}>
      <form  mt="10%" onSubmit={handlesubmit}>
        <Input name="username" placeholder='Enter Your UserName' onChange={handleChange} value={data.username}/>
       <Select name="avatar" placeholder='Select Your Avatar' onChange={handleChange} value={data.avatar}>

<option value="https://img.freepik.com/premium-photo/3d-character-male-cartoon-with-eye-glasses-yellow-orange-polo-shirt-good-profile-picture_477250-8.jpg?size=626&ext=jpg&ga=GA1.2.1395151129.1685774887&semt=ais">Mens</option>
<option value="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?size=626&ext=jpg&ga=GA1.2.1395151129.1685774887&semt=ais">Womens</option>
<option value="https://img.freepik.com/premium-psd/3d-student_382786-1248.jpg?size=626&ext=jpg&ga=GA1.1.1395151129.1685774887&semt=ais">Boys</option>
<option value="https://img.freepik.com/free-psd/3d-illustration-person-with-pink-hair_23-2149436186.jpg?size=626&ext=jpg&ga=GA1.1.1395151129.1685774887&semt=ais">Girls</option>

       </Select>
        <Input name="email" type="email" placeholder='Enter Your Email' value={data.email} onChange={handleChange}/>
        <Input name="password" type="password" placeholder='Enter Your Password' value={data.password} onChange={handleChange}/>
        <Button type="submit" bg="black" color="white">SignUp</Button>
      </form>
    </Box>
  )
}

export default Signup
