import styled, { keyframes } from 'styled-components'


const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const Container = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.51);
    color:white;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100vh;
    width: 100%;

    
    @media(max-width: 750px){
        overflow: auto;
    }

    animation: ${fadeIn} .30s ease;
`

