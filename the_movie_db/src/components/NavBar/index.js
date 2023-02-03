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
  ['films/populaires', 'populaires', 'popular'],
  ['films/du-moment', 'du moment', 'now_playing'],
  ['films/à-venir', 'à venir', 'upcoming'],
  ['films/mieux-notés', 'les mieux notés', 'top_rated']
]
const LinkSeries = [
  ['séries/populaires', 'populaires', 'popular'],
  ['séries/aujour"hui', 'diffusées aujourd"hui', 'airing_today'],
  ['séries/en-cours', 'en cours de diffusion', 'on_the_air'],
  ['séries/mieux-notées', 'les mieux notées', 'top_rated']
]

const NavBar = ({ filmsCategory, filmsApiParam, seriesCategory, seriesApiParam }) => {
  return (
    <>
      <Header>
        <Container>
          <Nav>
            <LinkHome to="/"><Logo src={logo}></Logo></LinkHome>
            <WrapperLinks>
              <NavButton>Films</NavButton>
              <NavLinksMenu>
                {LinkFilms.map(([url, category, ApiParam]) => (
                  <LinksMenu to={url} key={category} onClick={() => { filmsCategory(category); filmsApiParam(ApiParam); }}>{category}</LinksMenu>
                ))}
              </NavLinksMenu>
            </WrapperLinks>
            <WrapperLinks>
              <NavButton>Émissions télévisées</NavButton>
              <NavLinksMenu>
                {LinkSeries.map(([url, category, ApiParam]) => (
                  <LinksMenu to={url} key={category} onClick={() => { seriesCategory(category); seriesApiParam(ApiParam); }}>{category}</LinksMenu>
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