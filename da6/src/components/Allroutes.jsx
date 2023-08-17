import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Signin from '../pages/Signin'
import Signup from '../pages/SIgnup'
import Forum1 from '../pages/Forum1'


const Allroutes = () => {
  return (
 
      

<Routes>
    <Route path="/login" element={<Signin/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/forum" element={<Forum1/>}  />
</Routes>

    
  )
}

export default Allroutes
