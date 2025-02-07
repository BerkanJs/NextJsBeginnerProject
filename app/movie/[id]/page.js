import React from 'react'
import MovieContainer from '../../containers/movie'
import Movies from '../../../mocks/movies.json'
import { notFound } from 'next/navigation'



const MoviePage = async({params ,searchParams}) => {
  const { id } = await params
  

  const movieDetail=Movies.results.find((movie)=>movie.id.toString()===id)
  if(!movieDetail){
    notFound();
  }
  if(searchParams.error==="true"){
    throw new Error("Error happened")
  }
  return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage