import styled from "styled-components";

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';

export const Container = styled.main`
    padding-block: 2rem;
`
export const Slider = styled(Swiper)`

`
export const Slide = styled(SwiperSlide)`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 1rem;
    width: auto;
`