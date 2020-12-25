import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 400 14px 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-image: url('/assets/images/background.jpg');
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    min-height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
