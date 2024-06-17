import React, { useState } from 'react'
import { Login } from './Login'
import { Signup } from './Signup'

export const Main = () => {
    const [mode,setMode]=useState("signin")
  return (
    <div>{
        mode=="signin"?<Login setMode={setMode}/>:<Signup setMode={setMode}/>
    }</div>
  )
}
