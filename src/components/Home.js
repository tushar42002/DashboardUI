import React from 'react'
import SideBar from './SideBar'
import Dashboard from './Dashboard'
import Navbar from './Navbar'

export default function Home() {

    let HomeStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        height: 'fit-content',
        background: '#dddce1'
         }

  return (
    <>
    <Navbar/>
    <div style={HomeStyle}>
      
       <SideBar/>
       <Dashboard/>
    </div>
    </>
  )
}
