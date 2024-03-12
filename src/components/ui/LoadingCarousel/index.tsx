import * as S from './styles'

type Props = {}

const LoadingCarousel = (props: Props) => {

    const mock = Array.from({ length: 10 })
  return (
    <S.Container>
        <S.Slider>
            <S.Slide>
                {mock.map(item =>(
                    <
                ))}
            </S.Slide>
        </S.Slider>
    </S.Container>
  )
}

export default LoadingCarousel;