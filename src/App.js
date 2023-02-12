import './App.css'
import Home from './sections/Home'
import React, { useState } from 'react'
import About from './sections/About'
import Work from './sections/Work'
import dark_developer from './images/dark_developer_icon.png'
import dark_blockchain from './images/dark_blockchain_icon.png'
import light_developer from './images/developer_icon.png'
import light_blockchain from './images/blockchain_icon.png'
import Portfolio from './sections/Portfolio'
import projectBg_light from './images/project_bg_light.svg'
import projectBg_dark from './images/project_bg_dark.svg'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function changeDarkMode() {
    setDarkMode(!darkMode)
  }
  return (
    <div className="App">
      <div className="dark_mode_btn" onClick={changeDarkMode}>
        <span
          className="material-symbols-rounded"
          style={{ color: darkMode ? 'black' : 'white' }}
        >
          {darkMode ? 'dark' : 'light'}_mode
        </span>
      </div>
      <Home
        setMode={
          darkMode
            ? ['black', '#E1EBFF', '#1D416C']
            : ['white', '#07091a', '#558fff']
        }
      />
      <About
        setMode={
          darkMode
            ? ['black', 'light', '#bbbbbb', '#ffffff', 'transparent']
            : ['white', 'dark', '#161618', '#212124', '#212124']
        }
      />
      <Work
        setMode={
          darkMode
            ? [
                'black',
                '#e1ebff',
                'white',
                `${light_developer}`,
                `${light_blockchain}`,
              ]
            : [
                'white',
                '#07091a',
                'black',
                `${dark_developer}`,
                dark_blockchain,
              ]
        }
      />
      <Portfolio
        setMode={
          darkMode
            ? ['black', projectBg_light, '#1D416C']
            : ['white', `${projectBg_dark}`, '#558fff']
        }
      />

      <Contact
        setMode={
          darkMode
            ? ['black', '#E1EBFF', '#1D416C']
            : ['white', '#07091a', '#558fff']
        }
      />
      <Footer setMode={darkMode ? ['black', 'white'] : ['white', 'black']} />
    </div>
  )
}

export default App
