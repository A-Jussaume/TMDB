import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/fetch/useFetch";
import { usePagination } from "../../hooks/pagination/pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {
  MainContainer,
  TitlePage,
  Container,
  FiltersContainer,
  Filters,
  TitleFilters,
  TitleListFilter,
  SelectedGenre,
  ButtonSelectedGenre,
  ListGenres,
  ListItem,
  CloseItem,
  Pagination,
  ButtonPagination,
  GridContainer,
  GridProviders,
  Grid,
  Logo,
  Posters,
  Image,
  Spinner
} from "./style/styled";

function PopularFilms() {

  const [genreFilms, setGenreFilms] = useState(null);
  const [nameGenre, setNameGenre] = useState(null);
  console.log(nameGenre)

  const [currentPage, setCurrentPage] = useState(1);

  const [listOpened, setListOpened] = useState(false);

  const { pagination } = usePagination(currentPage);
  const { data: films, loading: loadingFilms, error: errorFilms } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_genres=${genreFilms}`);
  const { data: genres, loading: loadingGenres, error: errorGenres } = useFetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR`);
  const { data: providers, loading: loadingProviders, erroe: errorProviders } = useFetch(`https://api.themoviedb.org/3/watch/providers/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR&watch_region=FR`)

  return (
    <main>
      <MainContainer>
        <TitlePage>Films Populaires</TitlePage>
        <Container>
          <FiltersContainer>
            {(!loadingGenres && genres) &&
              <Filters>
                <TitleFilters>Filtres</TitleFilters>
                {(!nameGenre) ?
                  <TitleListFilter onClick={() => setListOpened(!listOpened ? true : false)}>{nameGenre ? "Genre :" : "Genres"}</TitleListFilter>
                : <SelectedGenre>
                    <span>Genre : </span>
                    <ButtonSelectedGenre onClick={() => { setGenreFilms(null); setNameGenre(null) }}>{nameGenre}<FontAwesomeIcon icon={faClose} /></ButtonSelectedGenre>
                  </SelectedGenre>
                }
                <ListGenres visible={listOpened && true}>
                  {genres.genres.map((genre) => (
                    <ListItem key={genre.id} active={genreFilms === `${genre.id}` && true} onClick={() => { setGenreFilms(genreFilms === `${genre.id}` ? null : `${genre.id}`); setNameGenre(`${genre.name}`); setListOpened(false); setCurrentPage(1) }}>
                      <span>{genre.name}</span>
                      <CloseItem visible={genreFilms === `${genre.id}` && true}>
                        <FontAwesomeIcon icon={faClose} />
                      </CloseItem>
                    </ListItem>
                  ))}
                </ListGenres>
                <GridContainer>
                  <Grid logosProviders>
                    {providers.results.map((provider) => (
                      <Logo>
                        <Image key={provider.provider_id} src={"https://image.tmdb.org/t/p/original" + provider.logo_path} alt="" />
                      </Logo>
                    ))}
                  </Grid>
                </GridContainer>
              </Filters>
            }
          </FiltersContainer>
          <GridContainer>
            <Pagination>
              <div>
                <ButtonPagination hidden={currentPage < 8 && true} onClick={() => setCurrentPage(currentPage - 1)}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </ButtonPagination>
              </div>
              <div>
                <ButtonPagination hidden={currentPage < 8 && true} onClick={() => setCurrentPage(1)}>1</ButtonPagination>
                <ButtonPagination noPointer hidden={currentPage < 8 ? true : false}>...</ButtonPagination>
                {pagination.map((page) => (
                  <ButtonPagination key={page} active={currentPage === page && true} onClick={() => setCurrentPage(page)}>{page}</ButtonPagination>
                ))}
                <ButtonPagination noPointer hidden={currentPage < 494 ? false : true}>...</ButtonPagination>
                <ButtonPagination hidden={currentPage < 494 ? false : true} onClick={() => setCurrentPage(500)}>500</ButtonPagination>
              </div>
              <div>
                <ButtonPagination hidden={currentPage === 500 && true} onClick={() => setCurrentPage(currentPage + 1)}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </ButtonPagination>
              </div>
            </Pagination>
            {loadingFilms && <Spinner />}
            {(!loadingFilms && films) &&
              <Grid postersFilms>
                {films.results.map((film) => (
                  <Posters key={film.id}>
                    <Image src={"https://image.tmdb.org/t/p/original/" + film.poster_path} alt="" />
                  </Posters>
                ))}
              </Grid>
            }
          </GridContainer>
        </Container>
      </MainContainer>
    </main>
  )
}
export default PopularFilms;