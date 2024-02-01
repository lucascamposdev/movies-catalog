// Styles
import * as S from '../styles'

// React
import { useContext } from 'react'
import { ChangeEvent } from 'react'

// Context
import { searchContext } from '@context/searchContext'
import { useNavigate } from 'react-router-dom'

const ResponsiveInput = () => {

  const navigate = useNavigate();
    const { setQuery, setPageNum, query } = useContext(searchContext)

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
        setPageNum(1)
        navigate(`/search?q=${event.target.value}`)
      };

  return (
    <S.SearchInput
    type='text'
    placeholder='Search Movies...'
    onChange={handleSearchChange}
    value={query ? query : ''}/>
  )
}

export default ResponsiveInput