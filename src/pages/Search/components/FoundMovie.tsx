// Styles
import * as S from '../styles'

// Types
import { Movie } from 'types/types'

// Utils
import imagePath from '@utils/imagePath'

// Context
import { useContext } from 'react'
import { modalContext } from '@context/modalContext'

// Components
import { LoadingPoster } from '@components/index'

type Props = {
    item: Movie
}

const FoundMovie = ({ item }: Props) => {

  const { handleSelection } = useContext(modalContext)

  const handleClick = ():void => {
    handleSelection(item)
  }

  console.log(item)

  return (
    <S.MovieCard onClick={handleClick}>
      {typeof item.poster_path == 'string' ?
        <LoadingPoster path={imagePath.medium + item.poster_path}/>
      :
        <S.NoPoster>
          <S.NoPosterImage src='/images/misc/no_poster.svg' />
          <S.NoPosterName>{item.title}</S.NoPosterName>
        </S.NoPoster>
      }
    </S.MovieCard>
  )
}

export default FoundMovie