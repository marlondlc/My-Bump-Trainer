import React from 'react';
import { Redirect } from 'react-router-dom'

const Logout = () => {

  localStorage.removeItem('jwt')
  localStorage.removeItem('currentUser')
  return <Redirect to='/login' />
}

export default Logout;