import styled from 'styled-components'
import Main from './Main'

export const Page = styled(Main)`
    background: ${({ theme }) => theme.color.primary};
`