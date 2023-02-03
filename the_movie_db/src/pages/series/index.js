import { useEffect, useState } from "react";
import { MainContainer } from "./styled";
import { PostersContainer } from "./styled";
import { Image } from "./styled";

const Series = ({ category, apiParam }) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  // console.log(apiParam);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${apiParam}?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=fr-FR&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.results)
        console.log(data);
        setLoading(false)
      })
      .catch((e) => {
        console.error(`An error occured: ${e}`)
      })
  }, [category]);

  return (
    <main>
      {loading &&
        <MainContainer>
          <p>Loading...</p>
        </MainContainer>
      }
      {!loading &&
        <MainContainer>
          <h1>Films {category}</h1>
          <PostersContainer>
            {data.map((film) => (
              <div>
                <Image src={"https://image.tmdb.org/t/p/original/" + film.poster_path} alt="" />
              </div>
            ))}
          </PostersContainer>
        </MainContainer>
      }
    </main>
  )
}
export default Series;