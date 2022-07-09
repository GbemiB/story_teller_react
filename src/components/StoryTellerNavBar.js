
import { FaModx } from 'react-icons/fa';
import { FaAsterisk } from 'react-icons/fa';
import { FaHubspot } from 'react-icons/fa';
import { FaInternetExplorer } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const iconStyle = {
 fontSize: "1.5em" ,
 color: "#d87093",
 marginLeft: "2rem",
 marginRight: "1rem"
}


const navMenu = {
  fontSize: "1em" ,
  color: "#000000",
  marginLeft: "2rem",
  marginRight: "1rem",
  marginTop: "2rem",
  marginbuttom: "2rem",

 }

function StoryTellerNavBar() {
  return (
      <div>
          <nav>
              <ul style={ navMenu }><span style={ iconStyle }><FaModx/></span> Onboarding</ul>
              <ul style={ navMenu }><span style={ iconStyle }><FaAsterisk/></span>Registration</ul>
              <ul style={ navMenu }><span style={ iconStyle }><FaHubspot/></span>Story Upload</ul>
              <ul style={ navMenu }><span style={ iconStyle }><FaInternetExplorer/></span>Story Track</ul>
              <ul style={ navMenu }><span style={ iconStyle }><FaCheck/></span>Story Performance</ul>
          </nav>
      </div>

  )
}
export default StoryTellerNavBar;


