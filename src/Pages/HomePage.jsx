import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }
`

const HomePage = () => {
  return (
    <>
        <GlobalStyles/>
        <Navbar/>
        <Outlet/>
        <Footer />
  </>
  )
}

export default HomePage