import * as S from './styles'

type Props = {
    height: number
}

const Skeleton = ({ height }: Props) => {
  return (
    <S.Skeleton height={height}/>
  )
}

export default Skeleton