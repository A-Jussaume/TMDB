import React from "react";
import logo from "../../assets/the_movie_db_logo.svg";
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Header } from "./styled";
import { Container } from "./styled";
import { Nav } from "./styled";
import { LinkHome } from "./styled";
import { Logo } from "./styled";
import { NavButton } from "./styled";
import { WrapperLinks } from "./styled";
import { NavLinksMenu } from "./styled";
import { LinksMenu } from "./styled"
import { WrapperLeft } from "./styled";
import { WrapperRight } from "./styled";
import { Form } from "./styled";

const LinkFilms = [
  ['films/populaires', 'populaires'],
  ['films/du-moment', 'du moment'],
  ['films/à-venir', 'à venir'],
  ['films/mieux-notés', 'les mieux notés']
]
const LinkSeries = [
  ['séries/populaires', 'populaires'],
  ['séries/aujour"hui', 'diffusées aujourd"hui',],
  ['séries/en-cours', 'en cours de diffusion'],
  ['séries/mieux-notées', 'les mieux notées']
]

const NavBar = () => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <LinkHome to="/"><Logo src={logo}></Logo></LinkHome>
            <WrapperLinks>
              <NavButton>Films</NavButton>
              <NavLinksMenu>
                {LinkFilms.map(([url, category]) => (
                  <LinksMenu to={url} key={category}>{category}</LinksMenu>
                ))}
              </NavLinksMenu>
            </WrapperLinks>
            <WrapperLinks>
              <NavButton>Émissions télévisées</NavButton>
              <NavLinksMenu>
                {LinkSeries.map(([url, category]) => (
                  <LinksMenu to={url} key={category}>{category}</LinksMenu>
                ))}
              </NavLinksMenu>
            </WrapperLinks>
            <WrapperLinks>
              <NavButton>Artistes</NavButton>
              <NavLinksMenu>
                <LinksMenu to="artistes/populaires">Populaires</LinksMenu>
              </NavLinksMenu>
            </WrapperLinks>
          </Nav>
        </Container>
        {/* <WrapperRight>
      <form action="">
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </WrapperRight> */}
      </Header><Outlet />
    </>
  )
}
export default NavBar;