import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    max-width: 100vw;
    max-height: 100vh;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body{
    font-family: 'Noto Sans KR', sans-serif;

  }
  a { cursor: pointer; text-decoration: none; }
`;
