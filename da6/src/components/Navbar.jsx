import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box>
      <Flex height="5vh" bg="black" color="white" justifyContent={"space-around"}>
        <Link to="/login" >Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/forum">Forum</Link>
       
      </Flex>
    </Box>
  )
}

export default Navbar
