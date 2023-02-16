import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/home';
import PopularFilms from './pages/films/PopularFilms';
import NowPlayingFilms from './pages/films/NowPlayingFilms';
import TopRatedFilms from './pages/films/TopRatedFilms';
import UpComingFilms from './pages/films/UpComingFilms';
import Series from './pages/series';
import Artistes from './pages/artistes';

const LinkFilms = [
  'films/populaires',
  'films/du-moment',
  'films/à-venir',
  'films/mieux-notés'
]
const LinkSeries = [
  'séries/populaires',
  'séries/aujour"hui',
  'séries/en-cours',
  'séries/mieux-notées'
]

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
            <Route path='films/populaires' element={<PopularFilms />} />
            <Route path='films/du-moment' element={<NowPlayingFilms/>} />
            <Route path='films/à-venir' element={<UpComingFilms/>} />
            <Route path='films/mieux-notés' element={<TopRatedFilms/>} />
          {/* {LinkSeries.map((url) => (
            <Route key={url} path={url} element={<Series category={seriesCategory} apiParam={seriesApiParam} />} />
          ))} */}
          <Route path="/artistes/populaires" element={<Artistes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
