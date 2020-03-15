import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.25s linear;
  }

  h1 {
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.textColor};

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
  }

  h2 {
    font-size: 36px;
    line-height: 42px;
    margin: 30px 0;
    color: ${({ theme }) => theme.textColor};

    @media (min-width: 1024px) {
      margin: 0 0 30px 0;
    }
  }

  h3 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textColor};
  }

  a {
    display: flex;
    text-decoration: none;
  }
`;

export default GlobalStyles;
