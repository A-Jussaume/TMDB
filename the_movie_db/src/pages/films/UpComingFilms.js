import { useEffect, useState } from "react";
import {
  MainContainer,
  TitlePage,
  Container,
  FiltersContainer,
  Filters,
  TitleFilters,
  ListGenres,
  ListItem,
  CloseItem,
  Pagination,
  ButtonPagination,
  GridContainer,
  Grid,
  Posters,
  Image,
  Spinner
} from "./style/styled";
import { useFetch } from "../../hooks/fetch/useFetch";

const UpComingFilms = () => {

  const { data: films, loading: loadingFilms, error: errorFilms } = useFetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR&page=1`);
  const { data: genres, loading: loadingGenres, error: errorGenres } = useFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR`);

  return (
    <main>
      {(loadingFilms || loadingGenres)
        ? <MainContainer>
          <p>Loading...</p>
        </MainContainer>

        : <MainContainer>
          <TitlePage>Films à venir</TitlePage>
          <Container>
            <FiltersContainer>
              <Filters>
                <TitleFilters>Filtres</TitleFilters>
                {genres.genres.map((genre) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </Filters>
            </FiltersContainer>
            <Grid>
              {films.results.map((film) => (
                // <Posters key={film.id}>
                  <Image src={"https://image.tmdb.org/t/p/original/" + film.poster_path} alt="" />
                // </Posters>
              ))}
            </Grid>
          </Container>
        </MainContainer>
      }
    </main>
  )
}
export default UpComingFilms;