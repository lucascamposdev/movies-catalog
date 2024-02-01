import styled from "styled-components";

interface Props {
    isLoading: boolean;
}

export const Image = styled.img<Props>`
    width: 100%;
    height: 100%;
    border-radius: 5px;

    transition: all .25s ease;
    opacity: ${({ isLoading }) => isLoading ? '0;' : '1;'};
    cursor: pointer;

`
