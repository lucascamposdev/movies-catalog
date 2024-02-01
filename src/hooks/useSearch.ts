// Service
import { searchMovies } from "@services/movies.service";

// React
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Types
import { Movie } from "types/types";

interface Props {
    query: string | null
    pageNum: number
}

const useSearch = ({ query, pageNum }: Props) =>{

  const navigate = useNavigate()
  const [data, setData] = useState<Movie[] | undefined>(undefined)
  const [ hasMore, setHasMore ] = useState<boolean>(false)

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() =>{
    setData([])
    window.scroll({
      top: 0,
    });
  }, [query])

  useEffect(() => {    
      const controller = new AbortController();
      const { signal } = controller

      if(!query) {
        navigate('/')
        return
      }
  
      const execute = async() =>{
        try{
          setLoading(true)
          setError(false)
          
          const { results, totalPages } = await searchMovies(query, pageNum, signal )
          setHasMore(pageNum < totalPages)
          setData(prev => prev?.concat(results))
  
        }catch(err: any){
            console.log('Requisição cancelada:', err.message);
            setError(true)
        }finally{
          setLoading(false)
        }
      }
        
      execute();

      return () =>  controller.abort()
    }, [query, pageNum])

    return { data, hasMore, loading, error }
}

export default useSearch;