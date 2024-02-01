import { useEffect, useState } from "react";
import { getMovies } from "@services/movies.service";
import { Movie } from "types/types";

interface useGetProps {
  endpoint: string;
}

const useGet = ({ endpoint }: useGetProps) => {

  const [data, setData] = useState<Movie[] | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>('')

  useEffect(() => {    
    const controller = new AbortController();
    const { signal } = controller

    const execute = async() =>{
      try{
        setLoading(true)
        const results = await getMovies(endpoint, signal )
        setData(results)

      }catch(err: any){
          console.log('Requisição cancelada:', err.message);
          setError(err.message)
      }finally{
        setLoading(false)
      }
    }

    execute();

    return () =>  controller.abort()
  }, [endpoint])

  return { data, loading, error }
};

export default useGet;
