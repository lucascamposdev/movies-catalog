import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';


export const Container = styled.main`
    padding-bottom: 2rem;

`

export const Title = styled.h1`
    font-family: var(--main-font);
    font-size: 1.2rem;
    margin: 1rem;
    color:white;
`

export const Span = styled.span`
    color: orangered;
`

export const fadeOut = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(to left, transparent, #000000 90%);

    @media (max-width: 750px) {
        display: none;
    }
`
export const Slider = styled(Swiper)`
    position: relative;
    user-select: none;
    
    &:hover .swiper-button-prev{
        display: flex;
    }

    &:hover .swiper-button-next{
        display: flex;
    }

    .swiper-button-prev,
    .swiper-button-next{
        display: none;
        color: white;
        height: 100%;
    }
    
    .swiper-button-prev:after,
    .swiper-button-next:after{
        height: 100%;
        font-size: 1.2rem;
        font-weight: bolder;
    }

    @media(max-width: 750px){
        &:hover .swiper-button-prev{
            display: none;
        }

        &:hover .swiper-button-next{
            display: none;
        }
    }

`

export const Slide = styled(SwiperSlide)`
    height: 100%;
    width: auto;

    display: grid;
    place-content: center;

`

export const TopSlide = styled(SwiperSlide)`
    height: 100%;
    width: auto;

    display: grid;
    place-content: center;

    &:first-child img:nth-child(2){
        transform: translateX(-10px);
        margin-right: 30px;
    }


`
