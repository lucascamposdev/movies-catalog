import { Image } from './styles'

import { useState } from 'react'

type Props = {
    path: string;
}

const LoadingPoster = ({ path }: Props) => {
    const [loading, setLoading] = useState<boolean>(true)
  
    const handleImageLoad = (): void => {
      setLoading(false);
    };
  
    return (     
        <Image
        src={path}
        onLoad={handleImageLoad}
        isLoading={loading} />
    )
}

export default LoadingPoster;