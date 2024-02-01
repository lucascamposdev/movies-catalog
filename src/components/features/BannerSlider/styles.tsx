import styled from 'styled-components'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

// Parent
export const Container = styled(Swiper)`
    position: relative;
    background: black;
    .swiper-pagination-bullet{
        background: grey;
    }

    height: 70vh;

    @media (max-width: 1700px){
    height: 550px;
    }

    @media (max-width: 1060px){
    height: 450px;
    }
    @media (max-width: 980px){
    height: 400px;
    }

    @media (max-width: 750px){
    height: 350px;
    margin-top: 3.9rem;
    }
`
export const Figure = styled.figure`
    position: absolute;
    right: 0;
    top: 0;
    width: 90%;
    height: 100%;

    &::before {
    content: "";
    position: absolute;
    bottom: 0;
    transform: scale(1.3);
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, transparent, #000000 90%);
    z-index: 1;
    }

    &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1.3);
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, transparent, #000000 90%);
    z-index: 1;
    }

    img{
        min-width: 615px;
    }
`

export const Slide = styled(SwiperSlide)`
    background: black;

`

// Slider Content
export const Content = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding-inline: 2rem;
    height: 100%;

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1rem;
    z-index: 2;
    padding-block: 2rem;
`

export const Label = styled.span`
    display: flex;
    align-items: center;
    gap: .3rem;
    font-family: var(--main-font);
    font-size: .8rem;
    color: orangered;
`

export const Title = styled.h1`
    font-family: var(--second-font);
    text-transform: uppercase;
    font-size: 3.5em;
    width: 450px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: 980px){
       font-size: 1.75em;
    }
    @media (max-width: 750px){
        width: 250px;
    }
`

export const Description = styled.p`
    font-family: var(--main-font);
    width: 80%;
    max-width: 450px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    margin-block: .5rem;

    @media (max-width: 750px){
        height: 0;
        opacity: 0;
    }
`



export const Button = styled.button`
    width: 180px;
    font-size: 1rem;
    padding-block: .5rem;

    border-radius: 5px;
    font-family: var(--main-font);
    color: white;
    background: var(--second-color);
    border: none;
    cursor: pointer;

    &:hover{
        background: #444;
    }

    @media (max-width: 980px){
        width: 100px;
        font-size: .7rem;
        padding-block: .5rem;
    }
`


