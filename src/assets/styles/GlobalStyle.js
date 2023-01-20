import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: "Fira Sans", sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(
      180deg,
      #1B7290 0%,
      #50A7C0 100%
    );
    overflow: hidden;
  }
  
  a, button {
    font-family: "Fira Sans", sans-serif;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a:hover {
    color: initial;
    text-decoration: none;
  }
`;
