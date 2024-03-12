import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";

interface Props {
    isOpen: boolean;
}

export const Form = styled.form`
    display: flex;
    gap: 1rem;
    margin-left: auto;

`

export const SearchInput = styled.input<Props>`
    font-family: var(--main-font);
    border-radius: 5px;

    background: #444;
    color: white;
    outline: none;
    border: none;
    padding-block: .5rem;

    transition: all .50s ease;
    ${({ isOpen }) => isOpen ? 'width: 300px; padding-inline: 1rem;' : 'width: 0; padding-inline:0;'};
    

    @media ( max-width: 750px){
        width: 130px;
        background: transparent;
        border-radius: 0;
        padding: 0;

        ::placeholder{
            color:white;
        }
    }

    ::placeholder {
    font-family: var(--main-font);
  }
`

export const Icon = styled(IoSearch)`
    font-size: 2rem;
    cursor: pointer;

    @media ( max-width: 750px){
        display: none;
    }
`

