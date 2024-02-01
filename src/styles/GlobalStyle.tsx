import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    --main-font: 'Kanit', sans-serif;
    --second-font:'Staatliches', sans-serif;
    --main-color: orange;
    --second-color: #212529;
    --third-color: #181717;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: black;
  }

  h1, p{
    margin: 0;
  }

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #585858; 
  border-radius: 6px; 
}

::-webkit-scrollbar-track {
  background-color: #353333; 
  border-radius: 10px;
}
`;