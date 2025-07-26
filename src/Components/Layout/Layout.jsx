import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import FooterContactDetails from '../FooterContactDetails/FooterContactDetails'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (<>
  <Navbar/>
  <Outlet/>
  <FooterContactDetails/>
  <Footer/>
  </>

  )
}

export default Layout