import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.25s linear;
  }

  h1 {
    font-size: 24px;
    line-height: 30px;
  }

  h2 {
    font-size: 18px;
    line-height: 24px;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 1280px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default GlobalStyles;
