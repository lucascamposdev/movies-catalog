// Styles
import * as S from './styles'

// Hooks
import useSearch from "@hooks/useSearch"

// Context
import { useContext } from "react"

// Components
import FoundMovie from "./components/FoundMovie"
import InfiniteScroll from "react-infinite-scroll-component"
import { Modal } from '@components/index'

// Context
import { searchContext } from '@context/searchContext'
import { modalContext } from '@context/modalContext'

import { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'

const Search = () => {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  const { setQuery, pageNum, setPageNum } = useContext(searchContext)
  const { isOpen } = useContext(modalContext)

  // when leave page, reset searchbar
  useEffect(() => {
    return () => {
      setQuery('')
    };
  }, []);

  const { data, hasMore, loading } = useSearch({ query, pageNum })

  const nextFetch = (): void => {
    setPageNum(prev => prev + 1)
  }

  return (
    <S.PageContainer>

      {isOpen && <Modal />}

      <S.ResultsFor>
        <h3><em>/</em>Results for "{query}"</h3>
      </S.ResultsFor>

      {data &&
          <InfiniteScroll
            dataLength={data.length}
            next={nextFetch}
            hasMore={hasMore}
            loader={null}
            className="infinite-results-container"
            scrollThreshold={0.5}>
            {data.map((item, index) => (
                <FoundMovie key={index} item={item} />
              ))}
          </InfiniteScroll>
      }

      {/* No Results */}
      {data && data.length == 0 && !loading &&
        <S.NoResults>
          We didn't find any matches for your search
        </S.NoResults>
      }
    </S.PageContainer>
  )
}

export default Search