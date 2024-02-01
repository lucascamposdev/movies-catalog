import styled from 'styled-components'

interface Props {
    isScrolled: boolean;
}

export const StyledNavbar = styled.nav<Props>`
    position: fixed;
    z-index: 3;
    top: 0;
    display: flex;
    align-items: center;

    gap: 1.5rem;
    padding-inline: 1rem;
    padding-block: 1rem;
    width: 100%;

    transition: all .40s ease;
    background: ${({ isScrolled }) => !isScrolled ? 'transparent' : 'black'};

    font-family: var(--main-font);
    color: white;

    @media (max-width: 750px){
        display: flex;
        flex-direction: column;
        gap: .3rem;
    }

    & a{
        text-decoration: none;
        color: inherit;
    }

`

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    font-family: var(--main-font);
    font-size: 1.2rem;
    width: 192px;
    gap: .3rem;
    padding: .5rem 1rem;
    border-radius: 5px;
    
    color: orangered;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

`

