// Styles
import { modalContext } from '@context/modalContext';
import * as S from './styles'

// Components
import { MovieInfo, LoadingImage, Loader } from '@components/index'

// Hooks
import useModal from '@hooks/useModal';

// Utils
import imagePath from '@utils/imagePath'
import { useContext } from 'react';
import { formatGenres } from '@utils/format';


const ModalContent = () => {

    const { movieId, closeModal } = useContext(modalContext)
    const { data, loading } = useModal({ movieId });

    const handleClick = () => {
        console.log('cliquei')
        closeModal()
    }

    console.log(data)
    return (
        <>
            {data && !loading ?
                <S.Content>
                    <S.CloseButton onClick={handleClick} />
                    <S.ImageContainer>
                        <LoadingImage path={imagePath.large + data.backdrop_path} />
                        <S.Header>
                            <S.TitleContainer>
                                <S.Title>{data.title}</S.Title>
                                <MovieInfo
                                    avaliation={data.vote_average}
                                    date={data.release_date}
                                    runtime={data.runtime} />
                            </S.TitleContainer>
                        </S.Header>
                    </S.ImageContainer>
                    <S.Wrapper>
                        <S.Overview>{data.overview}</S.Overview>
                        <S.Details>
                            <p>Genres:</p>
                            <S.Genres>{formatGenres(data.genres)}</S.Genres>
                        </S.Details>
                    </S.Wrapper>
                </S.Content>
                :
                <S.LoadScreen>
                    <Loader/>
                </S.LoadScreen>
            }
        </>
    )
}

export default ModalContent