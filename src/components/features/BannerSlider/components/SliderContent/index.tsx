// Components
import { LoadingImage, MovieInfo } from '@components/index'

// Styles
import * as S from '../../styles'
import { HiFire } from "react-icons/hi";

// Utils
import imagePath from '@utils/imagePath'

// Types
import { Movie } from 'types/types'
import { useModal } from '@context/modalContext';

type Props = {
    item: Movie
}

const SliderContent = ({ item }: Props) => {

    const { handleSelection } = useModal();

  return (
    <S.Content>
        <S.Wrapper>
            <S.Label>
                <HiFire size={15}/>
                Discover
            </S.Label>
            <S.Title>
                {item.title}
            </S.Title>
            <MovieInfo date={item.release_date} avaliation={item.vote_average}/>
            <S.Description>
                {item.overview}
            </S.Description>  
            <S.Button onClick={() => handleSelection(item)}>
                More Details
            </S.Button>     
        </S.Wrapper>
    <S.Figure>
        <LoadingImage path={imagePath.large + item.backdrop_path}/>
    </S.Figure>
    </S.Content>
  )
}

export default SliderContent