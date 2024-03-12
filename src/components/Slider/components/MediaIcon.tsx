import imagePath from "../../../utils/imagePath"
import { MediaIconContainer, MediaIconImage, MediaIconTag, MediaLabel } from "../styles/Slider.style"
import { FaBahai } from "react-icons/fa";

type Props = {
    image: string
}

const MediaIcon = ({ image }: Props) => {
  return (
    <MediaIconContainer>
        <MediaIconImage src={imagePath.small + image}/>
        <MediaIconTag>
          <FaBahai size='40' color="orangered"/>
        </MediaIconTag>
        <MediaLabel>
          Discover
        </MediaLabel>
    </MediaIconContainer>
  )
}

export default MediaIcon