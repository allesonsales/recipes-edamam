import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Provider from './provider'
import Home from './home/home'
import Search from './searc/search'
import Modal from './modal/modal'
import Footer from './footer/footer'

function App() {
  return (
    <>
      <Provider>
        <Search />
        <Home />
        <Modal />
        <Footer />
      </Provider>
    </>
  )
}

export default App
