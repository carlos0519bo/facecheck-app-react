

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('user')
  if(user){
    return true
  } else {
    return false
  }
}

export const ProtectedRoutes=(props:any) =>{

  const auth=useAuth()

  return auth ? <Outlet/> : <Navigate to={'/login'} />
}