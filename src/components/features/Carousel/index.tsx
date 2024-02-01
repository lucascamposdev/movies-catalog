// Components
import MovieCard from './components/MovieCard'

// Hooks
import useGet from "@hooks/useGet";

// Styles
import * as S from "./styles"

// Swiper
import { Navigation } from 'swiper/modules';
import { Skeleton } from '@components/index';
import TopMovieCard from './components/TopMovieCard';

// Components

interface CarouselProps {
  endpoint: string
  title: string
  type: 'list' | 'top' 
}

const Carousel = ({ endpoint, title, type }: CarouselProps) => {

  const { data, loading } = useGet({ endpoint });

  if(!data || loading){
     return (<Skeleton height={280}/>)
  }
  
  return (
    <S.Container>

      <S.Title>
        <S.Span>/</S.Span>
        {title}
      </S.Title>

      <S.Slider 
      modules={[Navigation]} 
      navigation 
      slidesPerView={'auto'} 
      slidesPerGroup={1} 
      loop={type === 'list' ? true : false}>  

        <S.fadeOut/>
        {type === 'list' ?     
        data.filter(movie => typeof movie.poster_path == 'string')
        .map((item, index) =>(
            <S.Slide key={index}>
              <MovieCard item={item}/>
          </S.Slide> 
        )):
        data.filter(movie => typeof movie.poster_path == 'string')
        .slice(0,10)
        .map((item, index) =>(
            <S.TopSlide key={index}>
              <TopMovieCard item={item} position={index + 1}/>
          </S.TopSlide>   
        ))     
        }
      </S.Slider>
      
    </S.Container>
  )
}

export default Carousel