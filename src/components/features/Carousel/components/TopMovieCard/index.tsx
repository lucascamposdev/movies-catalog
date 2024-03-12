// Styles
import * as S from './styles'

// Components
import { LoadingPoster } from "@components/index"

// Types
import { Movie } from "types/types"

// React
import { useContext } from "react"

// Utils
import imagePath from "@utils/imagePath"

// Context
import { useModal } from "@context/modalContext"

type Props = {
    item: Movie;
    position: number
}

const TopMovieCard = ({ item, position }: Props) => {

    const { handleSelection } = useModal();
    
  return (
    <S.TopMovieCard onClick={() => handleSelection(item)}>
        <S.Number src={`/images/numbers/${position}.svg`}/>
        <LoadingPoster path={imagePath.medium + item.poster_path}/>
    </S.TopMovieCard>
)
}

export default TopMovieCard