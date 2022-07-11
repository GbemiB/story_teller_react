
import { AiOutlineHome } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';
import { CgTrack } from 'react-icons/cg';
import { FcSalesPerformance } from 'react-icons/fc';
import React, { useState } from "react"
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { MdAppRegistration } from 'react-icons/md';;

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
  marginLeft: "3.0rem"
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
        <MdClose style={mdCloseStyle} />
        <button onClick={handleToggle}>{
          navbarOpen ? <MdClose style={mdCloseStyle} /> : <FiMenu style={fiMenuStyle} />}
        </button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}
          style={navMenu}>
          <li><Link to='/'><span style={iconStyle}><AiOutlineHome /></span>Home</Link> </li>
          <li> <Link to='/onboard'><span style={iconStyle}><MdAppRegistration /></span>Onboarding</Link></li>
          <li><Link to='/upload'><span style={iconStyle}><BsUpload /></span>Upload</Link></li>
          <li> <Link to='/track'><span style={iconStyle}><CgTrack /></span>Tracking</Link></li>
          <li> <Link to='/performance'><span style={iconStyle}><FcSalesPerformance /></span>Performance</Link></li>
            <li>  <MdClose style={mdCloseStyle} onClick={() => closeMenu()}></MdClose></li>
        </ul>
      </nav>
    </div>

  )
}
export default StoryTellerNavBar;