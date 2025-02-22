import React from 'react'
import Navbar from './Components/Pages/Header/Navbar'
import { createGlobalStyle } from 'styled-components'
import Footer from './Components/Pages/Footer/Footer'

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }
`

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Footer />
    </>
  )
}

export default App