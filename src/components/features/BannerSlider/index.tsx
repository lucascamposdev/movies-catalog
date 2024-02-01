// Swiper
import { Pagination, Autoplay, EffectFade  } from 'swiper/modules';

// Components
import SliderContent from './components/SliderContent'

// Styles
import * as S from './styles';

// Hooks
import useGet from '@hooks/useGet';

interface SliderProps {
    endpoint: string
}

const BannerSlider = ({ endpoint }: SliderProps) => {

    const { data } = useGet({ endpoint })

    return (
        <S.Container      
        modules={[Pagination, Autoplay, EffectFade]}
        effect='fade'
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        pagination={{ clickable: true }}>
       
        {data && data 
            .filter(movie =>  typeof movie.backdrop_path === 'string')
            .slice(0, 5)
            .map((item) => (
                <S.Slide key={item.id} >
                    <SliderContent item={item}/>
                </S.Slide>
        ))}

    </S.Container>
  )
}

export default BannerSlider;