// React
import { useContext, ChangeEvent, useRef } from 'react'

// Style
import { Icon, Form, SearchInput } from './styles';

// Router
import { useNavigate } from 'react-router-dom';

// Context
import { searchContext } from '@context/searchContext';

const SearchBar = () => {

  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const { isOpen, query, setQuery, setPageNum, setIsOpen} = useContext(searchContext)

  const handleToggleSearch = () => {
    inputRef.current?.focus();
    setIsOpen(!isOpen)
  }

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    setPageNum(1)
    navigate(`/search?q=${event.target.value}`);
  };

  const handleClickOutside = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Icon onClick={handleToggleSearch} />
        <SearchInput
          isOpen={isOpen}
          type='text'
          placeholder='Search Movies...'
          onChange={handleSearchChange}
          value={query ? query : ''}
          ref={inputRef}
          onBlur={handleClickOutside}
          />
    </Form>
  )
}

export default SearchBar