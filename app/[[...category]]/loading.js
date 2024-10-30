import React from 'react'
import CategoriesLoading from '../components/categories/loading'
import FeaturedMovie from '../components/featured-movie'
import { MoviesSectionLoading } from '../components/movies-section/loading'


const Loading = () => {
  return (
    <div><FeaturedMovie/><CategoriesLoading/><MoviesSectionLoading/><MoviesSectionLoading/><MoviesSectionLoading/></div>
  )
}

export default Loading