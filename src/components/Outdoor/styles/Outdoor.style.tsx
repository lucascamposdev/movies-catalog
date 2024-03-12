import styled from 'styled-components'
import imagePath from '../../../utils/imagePath'

interface OutdoorProps {
    bgImage: string
}

export const StyledOutdoor = styled.div`
  display: flex;
  align-items: center;
  height: 85vh;
`;


export const OutdoorContent = styled.div`
    position: relative;
    height: 100%;
    overflow: hidden;

  & img{
    height: 150%;
    margin-bottom: 110px;
  }
`
export const OutdoorWrapper = styled.div`
    height: 100%;
    width: 75%;
    bottom: 0;
    padding: 2rem;
    color: white;
    background: black;
`

export const OutdoorName = styled.h1`
`

export const OutdoorDescription = styled.p`
`