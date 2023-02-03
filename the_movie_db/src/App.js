import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/home';
import Films from './pages/films';
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
  
  const [filmsCategory, setFilmsCategory] = useState(localStorage.getItem("filmsCategory") ? localStorage.getItem("filmsCategory") : "");
  localStorage.setItem("filmsCategory", filmsCategory);

  const [seriesCategory, setSeriesCategory] = useState(localStorage.getItem("seriesCategory") ? localStorage.getItem("seriesCategory") : "");
  localStorage.setItem("seriesCategory", seriesCategory);

  const [filmsApiParam, setFilmsApiParam] = useState(localStorage.getItem("filmsApiParam") ? localStorage.getItem("filmsApiParam") : "");
  localStorage.setItem("filmsApiParam", filmsApiParam);

  const [seriesApiParam, setSeriesApiParam] = useState(localStorage.getItem("seriesApiParam") ? localStorage.getItem("seriesApiParam") : "");
  localStorage.setItem("seriesApiParam", seriesApiParam);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar filmsCategory={setFilmsCategory} filmsApiParam={setFilmsApiParam} seriesCategory={setSeriesCategory} seriesApiParam={setSeriesApiParam} />}>
          <Route index element={<Home />} />
          {LinkFilms.map((url) => (
            <Route key={url} path={url} element={<Films category={filmsCategory} apiParam={filmsApiParam}/>} />
          ))}
          {LinkSeries.map((url) => (
            <Route key={url} path={url} element={<Series category={seriesCategory} apiParam={seriesApiParam}/>} />
          ))}
          <Route path="/artistes/populaires" element={<Artistes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
