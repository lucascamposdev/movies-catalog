// Styles
import * as Dropdown from './styles'
import { useNavigate } from 'react-router-dom';

// Utils
import genres from '@utils/genres';
import { useContext } from 'react';
import { categoriesContext } from '@context/categoriesContext';

const Categories = () => {

  const navigate = useNavigate();
  const { category } = useContext(categoriesContext)

  const handleClick = (genreId: number): void => {
    navigate(`genre/${genreId}`)
  };
    
  return (
    <Dropdown.Container>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        /{category}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {genres.map(genre => (
            <Dropdown.Item  key={genre.id} onClick={() => handleClick(genre.id)}>{genre.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown.Container>
  )
}

export default Categories