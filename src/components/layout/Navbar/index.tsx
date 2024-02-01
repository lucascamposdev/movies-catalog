// React
import { useState, useEffect } from "react"

// Router
import { Link } from "react-router-dom"

// Styles
import { NavLogo, StyledNavbar, Wrapper } from "./styles"
import { RiMovie2Line } from "react-icons/ri";

// Components
import SearchBar from "./components/SearchBar"
import Categories from "./components/Categories";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 25) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNavbar isScrolled={isScrolled}>      
      <Link to='/'>
          <NavLogo>
            <RiMovie2Line size={20}/>
              Movies Catalog
          </NavLogo>
      </Link>

      <Wrapper>
        <Categories/>
        <SearchBar/>
      </Wrapper>

    </StyledNavbar>
  )
}

export default Navbar