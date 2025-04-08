import React from 'react'
import RoutersIn from './routerIn'
import RoutersOut from './routerOut'
import MainTemplate from '../theme/MainTemplate'

const IndexRoot = () => {
  return localStorage.getItem('Token-data')?
  <MainTemplate>
    <RoutersIn/>
  </MainTemplate>:
  <RoutersOut/>
}

export default IndexRoot