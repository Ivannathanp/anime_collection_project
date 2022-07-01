import React from 'react'
import {NavbarWrapper, NavBar, StyledNavLink} from "./NavbarStyle";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBoxArchive } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
<NavbarWrapper>
    <NavBar>
      <ul className="side-menu">
        <li className="side-item">
          <StyledNavLink
            exact
            to="/"      
            
          >
            <FontAwesomeIcon icon={faHome}/>
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li className="side-item">
        <StyledNavLink
            exact
            to="/collection"      
           
          >
            <FontAwesomeIcon icon={faBoxArchive}/>
            <span>Collections</span>
            
          </StyledNavLink>
        </li>
    
      </ul>
    </NavBar>
    </NavbarWrapper>
  )
}

export default Navbar