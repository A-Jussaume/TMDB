import styled from "styled-components"
import { Link } from "react-router-dom"


export const Header = styled.header`
  background-color: rgb(15 23 42);
  position: sticky;
  top: 0;
  z-index: 10;
`
export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
  display: flex;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`
export const LinkHome = styled(Link)`
  margin-right: 1.5rem;
`
export const Logo = styled.img`
width: 250px;
`
export const NavButton = styled.button`
  background-color: rgb(15 23 42); 
  color: white;
  border: none;
  font-size: medium;
  font-weight: bold;
  padding: 1.5rem;
  cursor: pointer;
`
export const NavLinksMenu = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(15 23 42);
  padding: 10px 0 15px 22px;
  width: 250px;
  border-radius: 10px;
  border-top: solid rgb(6 182 212);
  margin-top: -7px;
`
export const LinksMenu = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;
  padding: 0.35rem;
  :hover{
    color: rgb(34 211 238);
  }
`
export const WrapperLinks = styled.div`
  :hover{
    ${NavLinksMenu}{
      display: block;
    }
  }
`
export const WrapperLeft = styled.div`
  display: flex;
`

export const WrapperRight = styled.div`
  padding:25px 0 25px 0;
`
