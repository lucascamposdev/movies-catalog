// React
import { useContext, ChangeEvent } from 'react'

// Style
import { SearchIcon, SearchForm, SearchInput } from './styles';

// Router
import { useNavigate } from 'react-router-dom';

// Context
import { searchContext } from '@context/searchContext';

const SearchBar = () => {

  const navigate = useNavigate();

  const { isOpen, query, setQuery, setPageNum, setIsOpen} = useContext(searchContext)

  const handleToggleSearch = () => {
    setIsOpen(!isOpen)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setPageNum(1)
    navigate(`/search?q=${event.target.value}`);
  };

  return (
    <SearchForm onSubmit={(e) => e.preventDefault()}>
      <SearchIcon onClick={handleToggleSearch} />
        <SearchInput
          isOpen={isOpen}
          type='text'
          placeholder='Search Movies...'
          onChange={handleSearchChange}
          value={query ? query : ''}/>
    </SearchForm>
  )
}

export default SearchBar