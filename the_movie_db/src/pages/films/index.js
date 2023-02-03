import { useEffect, useState } from "react";
import { MainContainer } from "./styled";
import { TitlePage } from "./styled";
import { Container } from "./styled";
import { FiltersContainer } from "./styled";
import { Filters } from "./styled";
import { TitleFilters } from "./styled";
import { Grid } from "./styled";
import { Posters } from "./styled";
import { Image } from "./styled";
// import { Genres } from "../../services/API_TMDB/films"


const Films = ({ category, apiParam }) => {

  const [films, setFilms] = useState([])
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(`https://api.themoviedb.org/3/movie/${apiParam}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR&page=1`),
      fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR`)
    ])
      .then(([resFilms, resGenres]) =>
        Promise.all([resFilms.json(), resGenres.json()])
      )
      .then(([dataFilms, dataGenres]) => {
        setFilms(dataFilms.results)
        setGenres(dataGenres.genres)
        setLoading(false)
      })
      .catch((e) => {
        console.error(`An error occured: ${e}`)
      })
  }, [category]);
  console.log(films, genres)

  return (
    <main>
      {loading &&
        <MainContainer>
          <p>Loading...</p>
        </MainContainer>
      }
      {!loading &&
        <MainContainer>
          <TitlePage>Films {category}</TitlePage>
          <Container>
            <FiltersContainer>
              <Filters>
                <TitleFilters>Filtres</TitleFilters>
                {genres.map((genre) => (
                  <p>{genre.name}</p>
                ))}
              </Filters>
            </FiltersContainer>
            <Grid>
              {films.map((film) => (
                <Posters key={film.id}>
                  <Image src={"https://image.tmdb.org/t/p/original/" + film.poster_path} alt="" />
                </Posters>
              ))}
            </Grid>
          </Container>
        </MainContainer>
      }
    </main>
  )
}
export default Films;