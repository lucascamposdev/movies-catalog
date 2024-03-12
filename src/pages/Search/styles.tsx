import styled from "styled-components";

enum ScreenSize{
    xl = 1610
}

export const PageContainer = styled.section`
    padding-top: 4.5rem;
    padding-inline: 2rem;
    height: auto;
    min-height: 100vh;

    .infinite-results-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        width: 100%;
    }

    @media (min-width: ${ScreenSize.xl}px) {
    .infinite-results-container{
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        gap: 1rem;
    }
    }
`

export const ResultsFor = styled.div`
    display: flex;
    margin-block: 3rem;
    font-family: var(--main-font);
    color: white;

    em{
        color: orangered;
    }

    @media (min-width: ${ScreenSize.xl}px) {
        margin-block: 5rem;
    }
`

export const NoResults = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color:white;
    font-family: var(--main-font);
    gap: 1rem;
`

// Movie
export const MovieCard = styled.div`
    display: grid;
    place-content: center;
    cursor: pointer;

    height: 100%;

    @media (min-width: ${ScreenSize.xl}px) {
        width: 225px;
    }
`

export const NoPoster = styled.div`
    color:white;
    width: 100%;
    height: 100%;
    position: relative;
`

export const NoPosterImage = styled.img`
    width: 100%;
    height: 100%;
`

export const NoPosterName = styled.p`
    position: absolute;
    color:white;
    font-family: var(--main-font);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`

// Responsive Search Input
export const SearchInput = styled.input`
    display: none;
    width: 100%;

    font-family: var(--main-font);
    border-radius: 5px;

    background: #444;
    color: white;
    outline: none;
    border: none;
    padding: .5rem 1rem;

    @media (max-width: 700px){
        display: block;
    }
`

