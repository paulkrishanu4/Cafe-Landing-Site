
import './App.css'
import { Aboutus } from './Components/Aboutus'
import { Footer } from './Components/Footer'
import { Gototop } from './Components/Gototop'
import { Hero } from './Components/Hero'
import { Navbar } from './Components/Navbar'
import { Products } from './Components/Products'
import Progressbar from './Components/Progressbar'
import { Visitus } from './Components/Visitus'
import {useState} from 'react';



function App() {
  const[theme,setTheme]=useState('light');
  return (
    <div className={`center ${theme}`}>
    <Navbar theme={theme} setTheme={setTheme}></Navbar>
    <Progressbar></Progressbar>
    <Hero></Hero>
    <Aboutus></Aboutus>
    <Products></Products>
    <Visitus></Visitus>
    <Gototop></Gototop>
    <Footer></Footer>
    </div>
  )
}

export default App
