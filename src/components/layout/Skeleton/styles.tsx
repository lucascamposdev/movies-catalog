import styled, { keyframes } from "styled-components";

interface Props {
    height: number
}

const shine = keyframes`
    0%{
        background: black;
    }
    50%{
        background: #252525;
    }
    100%{
        background: black;
    }
`

export const Skeleton = styled.section<Props>`
    width: 100%;
    height: ${({ height }) => `${height}px`};
    animation: ${shine} 1s linear infinite;
`