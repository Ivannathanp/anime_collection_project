import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  z-index: 8;
  bottom: 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.nav`
  width: 230px;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 100px;
  filter: drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.15));

  ul {
    width: 250px;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    flex-direction: row;
    margin: 0;
    padding: 0;
    li {
      border-radius: 100px;
      box-shadow: none;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-decoration: none;
font-size: 28px;
height: 44px;
width: 44px;
color: #c4c4c4;

span{
    font-family: "Nunito Sans", sans-serif;
 font-weight: 600;
 font-size: 11px;
         color: #424242
     }

&.active {
    display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-decoration: none;
font-size: 28px;
height: 44px;
width: 44px;
      color: #E52C32;
   

   
    span{
   font-family: "Nunito Sans", sans-serif;
font-weight: 600;
font-size: 11px;
        color: #424242
    }
`;
