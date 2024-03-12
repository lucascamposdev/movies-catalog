import styled from 'styled-components'

export const MoreDetailsButton = styled.button`
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