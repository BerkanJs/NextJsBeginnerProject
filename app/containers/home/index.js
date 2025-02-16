
import React from 'react'
import Movies from '../../../mocks/movies.json'
import FeaturedMovie from '@/app/components/featured-movie'
import Categories from '@/app/components/categories'
import Genres from '../../../mocks/genres.json'
import MoviesSection from '@/app/components/movies-section'


const HomeContainer = ({selectedCategory}) => {
 
  
  return (
    <div>


      <FeaturedMovie movie={Movies.results[0]}/>
      <Categories categories={Genres.genres.slice(1,6)}/>
     
      
     
      {selectedCategory.movies.length>0 &&(<MoviesSection title={Genres.genres.find((genre)=>`${genre.id}`===selectedCategory.id).name} movies={selectedCategory.movies}/>)}
      <MoviesSection title="Popular Films" movies={Movies.results.slice(1,7)}/>
      <MoviesSection title="Your Favorites" movies={Movies.results.slice(7,13)}/>

      
     { /*
  selectedCategory.movies.length>0 &&(
          <MoviesSection title={Genres.genres.find((genre)=>`${genre.id}`===id)} movies={selectedCategory.movies}/>).name*/}


    </div>
  )
}

export default HomeContainer