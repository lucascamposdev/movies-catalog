// React
import { useEffect, useState } from "react";

// Types
import { Movie } from "types/types";

import { getMovieById } from "@services/movies.service";

interface Props {
    movieId: number
}

const useModal = ({ movieId }: Props) => {

    const [data, setData] = useState<Movie>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller

        const execute = async () => {
            try {
                setLoading(true)
                const result = await getMovieById(movieId, signal)
                setData(result)

            } catch (err: any) {
                console.log('Requisição cancelada:', err.message);
            } finally {
                setLoading(false)
            }
        }

        execute();

        return () => controller.abort()
    }, [movieId])

    return { data, loading }
}

export default useModal;