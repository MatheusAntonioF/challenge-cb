import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    height: 100vh;
    width: 100vw;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased !important;

    overflow-x: hidden;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export { GlobalStyles };
