import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const RequiredUser = () => {
    const navigate=useNavigate()
    const isUser = JSON.parse(localStorage.getItem('userData'))
    useEffect(()=>{
        isUser ? <Outlet/> : navigate('/login')
    },[])
  return (
        isUser? <Outlet/> : navigate('/login')
  )
}
export default RequiredUser;