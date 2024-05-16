import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from 'react';
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

export const Navbar = ({theme,setTheme}) => {
  const [icon,setIcon]=useState(<IoMdSunny/>);
  function toggle(){
    theme == 'light'? setTheme('dark'):setTheme('light');
    theme == 'light'? setIcon(<IoMoon/>):setIcon(<IoMdSunny/>);
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-bar-padding" data-bs-theme={`${theme}`}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="image-bg">
    <a className="navbar-brand" href="#"><img src="./images/logo.png" height="40px" width="150px"/></a>
    </div>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <AnchorLink  className="anchor-link" href='#home'><a className="nav-link active nav-dec" aria-current="page">Home</a></AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="anchor-link" noffset={50} href='#aboutus'><a className="nav-link active nav-dec" aria-current="page">About Us</a></AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="anchor-link" offset={50} href='#products'><a className="nav-link active nav-dec" aria-current="page" >Products</a></AnchorLink>
        </li>
        <li className="nav-item">
          <AnchorLink className="anchor-link" offset={50} href='#branches'><a className="nav-link active nav-dec" aria-current="page">Branches</a></AnchorLink>
        </li>
        <li className="nav-item">
          <a className="nav-link active nav-dec" aria-current="page" onClick={()=>{toggle()}}>{icon}</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
     
    </div>
  )
}
