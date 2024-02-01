import styled from "styled-components";
import { RiMovie2Line } from "react-icons/ri";

export const Footer = styled.footer`
    height: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

export const Logo = styled(RiMovie2Line)`
    color: orangered;
    font-size: 3rem;
`

export const Wrapper = styled.div`
    color: grey;
    font-family: var(--main-font);
    font-size: .8rem;
`