// Style
import { GlobalStyle } from "@styles/GlobalStyle"
import { Page } from "@styles/PageContainer/styles";

// React-Router
import {BrowserRouter, Routes, Route,  } from 'react-router-dom';

// Pages
import Home from '@pages/Home';
import Search from '@pages/Search';
import ByGenre from "@pages/ByGenre";

// Context
import ModalProvider from "@context/modalContext";
import SearchProvider from "@context/searchContext";
import CategoriesProvider from "@context/categoriesContext";

// Components
import { Footer, Navbar } from '@components/index';

function App() {

  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <SearchProvider>
    <ModalProvider>
    <CategoriesProvider>
      <Navbar/>
      <Page>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="genre/:genre" element={<ByGenre/>}/>
        </Routes>
      </Page>
      <Footer/>
    </CategoriesProvider>
    </ModalProvider>
    </SearchProvider>
    </BrowserRouter>
    </>
  )
}

export default App
