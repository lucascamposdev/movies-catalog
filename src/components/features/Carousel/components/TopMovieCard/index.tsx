// Styles
import * as S from './styles'

// Types
import { Movie } from "types/types"

// React
import { useContext } from "react"

// Utils
import imagePath from "@utils/imagePath"

// Context
import { modalContext } from "@context/modalContext"
import { LoadingPoster } from "@components/index"

type Props = {
    item: Movie;
    position: number
}

const TopMovieCard = ({ item, position }: Props) => {

    const { handleSelection } = useContext(modalContext)
  return (
    <S.TopMovieCard onClick={() => handleSelection(item)}>
        <S.Number src={`/images/numbers/${position}.svg`}/>
        <LoadingPoster path={imagePath.medium + item.poster_path}/>
    </S.TopMovieCard>
)
}

export default TopMovieCard