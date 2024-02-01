// React
import { useState } from "react"

// Styles
import { Image, Loading } from "./styles"

type Props = {
  path: string
}

const LoadingImage = ({ path }: Props) => {

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const handleImageLoad = (): void => {
    setLoading(false);
  };

  const handleImageError = (): void => {
    setLoading(false)
    setError(true)
  }

  return (
    <>
      {loading && <Loading />}
      {error && <div>No Image</div>}
      <Image
        src={path}
        onLoad={handleImageLoad}
        onError={handleImageError}
        isImageLoaded={!loading && !error} />
    </>
  )
}

export default LoadingImage;