import styled, {keyframes} from "styled-components";

interface Props {
    isImageLoaded: boolean
}

export const Image = styled.img<Props>`
    width: 100%;
    
    position: absolute;
    ${({ isImageLoaded }) => (isImageLoaded ? 'opacity: 1;' : 'opacity: 0;')}
    transition: all .50s ease;
`

const shine = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`

export const Loading = styled.div`
    background: #2e2e2e;
    animation: ${shine} 1s ease infinite;
    width: 100%;
    height: 100%;
`