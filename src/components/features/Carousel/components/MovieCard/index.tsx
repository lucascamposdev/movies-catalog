// Types
import { Movie } from "types/types"

// Components
import { LoadingPoster } from "@components/index"

// Styles
import * as S from './styles'

// Utils
import imagePath from "@utils/imagePath"

// Context
import { useModal } from "@context/modalContext"

type Props = {
    item: Movie;
}

const MovieCard = ({ item }: Props) => {
  const { handleSelection } = useModal();
  
  return (
    <S.MovieCard onClick={() => handleSelection(item)}>
        <LoadingPoster path={imagePath.medium + item.poster_path}/>
    </S.MovieCard>
  )
}

export default MovieCard