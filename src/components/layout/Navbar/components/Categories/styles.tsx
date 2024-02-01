import styled from "styled-components";

import Dropdown from 'react-bootstrap/Dropdown';



export const Toggle = styled(Dropdown.Toggle)`
    gap: .5rem;
    display: flex;
    align-items: center;
    color:white;

    background: transparent;
    border: none;

    .btn.show{
        border: none;
    }

    &:hover{
        background: transparent;
    }


`
export const Container = styled(Dropdown)`
    .show{
        background: var(--second-color);
    }


`

export const Menu = styled(Dropdown.Menu)`
    @media (max-height: 670px){
        font-size: .9rem;
    }
`

export const Item = styled(Dropdown.Item)`

`