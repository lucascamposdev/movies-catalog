import * as S from './styles'

type Props = {

}

const Footer = (props: Props) => {
  return (
    <S.Footer>
        <hr></hr>
        <S.Logo/>
        <S.Wrapper>
        &copy; 2024, Developed by /Lucas Campos.
        </S.Wrapper>
    </S.Footer>
  )
}

export default Footer