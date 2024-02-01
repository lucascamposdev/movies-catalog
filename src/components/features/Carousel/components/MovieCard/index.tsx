// Types
import { Movie } from "types/types"

// Styles
import * as S from './styles'

// Utils
import imagePath from "@utils/imagePath"

// React
import { useContext } from "react"

// Context
import { modalContext } from "@context/modalContext"
import { LoadingPoster } from "@components/index"

type Props = {
    item: Movie;
}

const MovieCard = ({ item }: Props) => {
  const { handleSelection } = useContext(modalContext)
  
  return (
    <S.MovieCard onClick={() => handleSelection(item)}>
        <LoadingPoster path={imagePath.medium + item.poster_path}/>
    </S.MovieCard>
  )
}

export default MovieCard