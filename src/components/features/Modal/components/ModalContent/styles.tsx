import styled, { keyframes } from 'styled-components'
import { MdOutlineClose } from "react-icons/md";

const slideIn = keyframes`
    from{
        opacity: 0;
        transform: translateY(50px);
    }
    to{
        opacity: 1;
    }
`

// Content
export const Content = styled.section`
    position: relative;

    width: 100%;
    max-width: 800px;
    border-radius: 5px;
    background-color: var(--third-color);

    overflow: hidden;
    animation: ${slideIn} .25s ease;
    transition: all .50s ease;

    @media (max-width: 510px) {
        margin-top: 1rem;
    }
`

export const CloseButton = styled(MdOutlineClose)`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
    width: 30px;
    height: 30px;
    padding: .3rem;
    border-radius: 50%;
    background: #333;
    color:white;
    cursor: pointer;
    z-index: 3;
`

// Image Container
export const ImageContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    width: 100%;
    height: 450px;

    img{
    min-width: 800px;
    }

    &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(to bottom, transparent, var(--third-color) 95%);
    /* background: red; */
    z-index: 1;
    }
`

// Header
export const Header = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    margin: .75rem 1.5rem;
    font-family: var(--main-font);
    color: white;
    z-index: 2;
    display: flex;
    flex-direction: column;
    width: 100%;
`

// Title
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
export const Title = styled.h1`
    font-size: 2rem;
    max-width: 60%;
`



// Wrapper
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 1.5rem;
    gap: 1rem;
    font-family: var(--main-font);
    padding-bottom: 2rem;
`
export const Overview = styled.p`
    max-height: 150px;
    overflow: auto;

    @media(max-width: 750px){
        height: 100px;
    }
`

// Details
export const Details = styled.div`
    display: flex;
    gap: .3rem;
    color: grey;
 `

export const Genres = styled.p`
    color:white;
`

// Content Load Screen
export const LoadScreen = styled.div`
    display: grid;
    place-content: center;
    height: 650px;
`


