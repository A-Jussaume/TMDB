import styled from "styled-components"

export const MainContainer = styled.div`
  width: 66.66%;
  margin: auto;
`
export const TitlePage = styled.h1`
  color: white;
  background-color: rgb(15 23 42);
  font-size: 1.5rem;
  padding: 0.75rem;
  border-radius: 8px;
  border-bottom: solid 3px rgb(6 182 212);
  box-shadow: 0px 0px 3px rgb(15 23 42);
`
export const Container = styled.div`
  display: grid;
  grid-template: auto / 20% 80%;
`
export const FiltersContainer = styled.div`
  padding: 10px;
`
export const Filters = styled.div`
  background-color: rgb(15 23 42);
  color: white;
  box-shadow: 0px 0px 5px rgb(15 23 42);
  border-radius: 8px;
  padding: 1rem;
`
export const TitleFilters = styled.h3`
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: solid 2px rgb(6 182 212);
  border-radius: 8px 8px 0 0;
`
export const Grid = styled.div`
  display: grid;
  grid-template: auto / 20% 20% 20% 20% 20%;
`
export const Posters = styled.div`
  padding: 15px;
`
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgb(15 23 42);
  :hover{
    box-shadow: 0px 0px 10px rgb(15 23 42);
    filter: brightness(90%);
    cursor: pointer;
  }
`