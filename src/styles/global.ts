import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.text};
    font: 400 14px 'Open Sans', sans-serif;
  }
`;