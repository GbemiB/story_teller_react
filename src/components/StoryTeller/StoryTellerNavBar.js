
import { FaModx } from 'react-icons/fa';
import { FaAsterisk } from 'react-icons/fa';
import { FaInternetExplorer } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import React, { useState } from "react"
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { NavLink } from "react-router-dom"

const iconStyle = {
  fontSize: "1.5em",
  color: "#FFFFFF", 
  marginLeft: "1rem",
  marginRight: "1rem"
}

const navMenu = {
  fontSize: "1em",
  color: "#FFFFFF",
  fontSize: "1rem"
}

const mdCloseStyle = {
  color: "#FFFFFF", 
  width: "2.5rem", 
  height: "2.5rem", 
}

const fiMenuStyle = {
  color: "#7b7b7b", 
  width: "2.5rem", 
  height: "2.5rem", 
}

function StoryTellerNavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <div>
      <nav>
        <button onClick={handleToggle}>{
          navbarOpen ? <MdClose style={mdCloseStyle} /> : <FiMenu style={fiMenuStyle} />}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}
          style={navMenu}>
          <a class="nav-link" href=""  ><span style={iconStyle}><FaModx /></span>Onboarding</a>
          <a class="nav-link" href=""  ><span style={iconStyle}><FaAsterisk /></span>Upload</a>
          <a class="nav-link" href=""  ><span style={iconStyle}><FaInternetExplorer /></span>Tracking</a>
          <a class="nav-link" href=""  ><span style={iconStyle}><FaCheck /></span>Performance</a>
          <a class="nav-link" href=""  onClick={() => closeMenu()}><span style={iconStyle}><MdClose /></span>Close</a>
        </ul>
      </nav>
    </div>

  )
}
export default StoryTellerNavBar;