import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { deletequestion } from '../redux/forumredux/action'
import { useDispatch } from 'react-redux'


const Forumcard = ({username,avatar,title,description,date,upvotes,language,answers,id}) => {

const dispatch=useDispatch()

const handledelete=(id)=>{
dispatch(deletequestion(id))

    }

  return (
    <Box mt="2%" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" >
      <Flex gap={"5%"}>
      <Box>
<Image width="100px" src={avatar}/>
<Text>{username}</Text>
</Box>

<Box>
    <Text fontWeight={"600"}>{title}</Text>
    <Flex justifyContent={'space-around'}>
        <Text fontWeight={"500"}>{language}</Text>
        <Text>{date}</Text>
        <Text>{answers}</Text>
    </Flex>
</Box>

<Text>{upvotes}</Text>

      </Flex>
<Button>Edit</Button>
<Button onClick={()=>handledelete(id)} >Delete</Button>

    </Box>
  )
}

export default Forumcard
