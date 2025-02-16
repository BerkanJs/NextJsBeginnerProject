
import React from 'react'
import HomeContainer from '../containers/home';
import Movies from "../../mocks/movies.json"

const Home =  ({params}) => {
 
  let selectedCategory
  if(params.category?.length>0){
      selectedCategory=true;
  }

   
  return (
     <HomeContainer 
      selectedCategory={{
      id:params.category?.[0] ?? "",
      movies:selectedCategory ? Movies.results.slice(1,7):[]}}/>
  )
}

export default Home