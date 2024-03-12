import useFetch from "../../hooks/useFetch"
import { OutdoorContent, OutdoorDescription, OutdoorName, OutdoorWrapper, StyledOutdoor } from "./styles/Outdoor.style"
import { getDiscoverMovies } from "../../services/movies.service"
import { useEffect, useState } from "react"

import { Movie } from "../../types/types"
import imagePath from "../../utils/imagePath"

const Outdoor = () => {

  const { data, loading } = useFetch<Movie[] | undefined>({service: getDiscoverMovies})
  const [ randomMovie, setRandomMovie ] = useState<Movie | undefined>(undefined);
  
  useEffect(() => {
    if(data){
      setRandomMovie(data[Math.floor(Math.random() * data.length)])
    }
  }, [data])

  if(loading || !randomMovie){
    return 'loading...'
  }

  return (
    <StyledOutdoor>
      <OutdoorContent>
        <img src={imagePath.large + randomMovie.poster_path} alt="" />
        <img src={imagePath.large + randomMovie.poster_path} alt="" />
        <img src={imagePath.large + randomMovie.poster_path} alt="" />
        <img src={imagePath.large + randomMovie.poster_path} alt="" />

      </OutdoorContent>
    </StyledOutdoor>
  )
}

export default Outdoor