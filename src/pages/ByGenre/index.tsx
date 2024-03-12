// Components
import { BannerSlider, Carousel } from "@components/index";

// Utils
import genres from "@utils/genres";
import endpoints from "@utils/endpoints";

// Hooks
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"

// Context
import { categoriesContext } from "@context/categoriesContext";

const ByGenre = () => {
  const { genre } = useParams();
  const { setCategory } = useContext(categoriesContext)

  if(!genre) return null
  
  const genreId = parseInt(genre)

  const foundGenre = genres.find(g => g.id == genreId)
  
  useEffect(() =>{
    if(foundGenre) setCategory(foundGenre.name)
    return () => setCategory('Categories')
  }, [genre])
    
  return (
    <section>
        <BannerSlider endpoint={endpoints.popular_by_genre + genreId + '&page=2'}/>
        <Carousel title={`People's Favorite ${foundGenre?.name}`} endpoint={endpoints.best_by_genre + genre} type="list"/>
        <Carousel title={`Trending Now`} endpoint={endpoints.popular_by_genre + genreId } type="list"/>
        <Carousel title={`${foundGenre?.name}`} endpoint={endpoints.best_by_genre + genre + '&page=2'} type="list"/>
        <Carousel title={`Newest ${foundGenre?.name}`} endpoint={endpoints.newest_by_genre + genreId } type="list"/>
        <Carousel title={`You Also May Like`} endpoint={endpoints.best_by_genre + genre + '&page=3'} type="list"/>
    </section>
  )
}

export default ByGenre