import { StyledButton } from "./Button.style"

type Props = {
    text: string
    onClick: () => void
}

const Button = ({ text, onClick }: Props) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  )
}

export default Button