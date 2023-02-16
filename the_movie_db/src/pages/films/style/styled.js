import styled from "styled-components"

export const MainContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`
export const TitlePage = styled.h1`
  color: white;
  background-color: #0F172A;
  font-size: ${props => props.titlePage && "1.75rem"};
  padding: 0.75rem;
  border-radius: 8px;
  border-bottom: solid 3px #06B6D4;
  box-shadow: 0px 0px 3px #0F172A;
`
export const Container = styled.div`
  display: grid;
  grid-template: auto / 20% 80%;
`
export const FiltersContainer = styled.div`
  padding: 10px;
`
export const Filters = styled.div`
  background-color: #0F172A;
  color: white;
  box-shadow: 0px 0px 5px #0F172A;
  border-radius: 8px;
  padding: 1rem;
`
export const TitleFilters = styled.h1`
  margin: 0;
  padding-bottom: 0.5rem;
  font-size: 1.25rem;
  border-bottom: solid 2px #06B6D4;
  border-radius: 8px 8px 0 0;
`
export const TitleListFilter = styled.h2`
  padding-bottom: 0.5rem;
  font-size: 1rem;
`
export const ListGenres = styled.ul`
  padding: 0;
  display: none;
  display: ${props => props.visible ? "block" : "none"};
`
export const SelectedGenre = styled.div`
  margin: 1rem 0;
  display: flex;
  font-weight: bold;
  /* justify-content: space-between; */
`
export const ButtonSelectedGenre = styled.button`
  background-color: #06B6D4;
  font-weight: bold;
  border: none;
  margin-left: 5px;
  border-radius: 2.5px;
`
export const DropDown = styled.div`
  :focus{
    ${ListGenres}{
      display: block;
    }
  }
`
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 4px 0px 4px 4px;
  margin: 2.5px 0px 2.5px 0px;
  border-radius: 2.5px;
  :hover{
    background-color: #06B6D4;
    color: #0F172A;
    cursor: pointer;
  }
  background: ${props => props.active && "#06B6D4"};
  color: ${props => props.active && "#0F172A"};
  font-weight: ${props => props.active && "bold"};
`
export const CloseItem = styled.button`
  display: none;
  border: none;
  background-color: #06B6D4;
  :hover{
    cursor: pointer;
  }
  display: ${props => props.visible && "inline"};
`
export const Pagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0px 10px 10px 10px;
`
export const ButtonPagination = styled.button`
  background-color: #0F172A;
  color: white;
  width: 32.5px;
  font-size: 0.75rem;
  margin: 0px 4px 0px 4px;
  padding: 8px 0px;
  border-radius: 2.5px;
  border: none;
  :hover{
    background-color: #06B6D4 !important;
    cursor: pointer;
  }
  display: ${props => props.hidden ? "none" : "inline"};
  background: ${props => props.active && "#06B6D4"};
  color: ${props => props.active && "#0F172A"};
  pointer-events: ${props => props.noPointer && "none"};
`
export const GridContainer = styled.div`
  padding-top: 10px;
  animation: fadeIn 2s;
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
  }
`
export const Grid = styled.div`
  display: grid;
  grid-template: ${props => props.postersFilms && "auto / 20% 20% 20% 20% 20%"};
  grid-template: ${props => props.logosProviders && "auto / 25% 25% 25% 25%"};
`
export const Logo = styled.div`
  padding: 4px;
  :hover{
    border-radius: 8px;
    padding: 0;
  }
`
export const Posters = styled.div`
  padding: 10px;
`
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 5px #0F172A;
  :hover{
    filter: brightness(75%);
    cursor: pointer;
  }
`
export const Spinner = styled.span`
    margin-top: 10px;
    width: 24px;
    height: 24px;
    border: 5px solid #06B6D4;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
  } 
`