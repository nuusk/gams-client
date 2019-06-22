import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

  ${styledNormalize}

  body {
    color: ${({ theme }) => theme.color.text.primary};
    font-family: ${({ theme }) => theme.font.family};
    font-weight: ${({ theme }) => theme.font.weight.base};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color.text.primary};
    line-height: ${({ theme }) => theme.font.lineHeight.heading};
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.heading.primary};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.heading.secondary};
  }

  p {
    line-height: ${({ theme }) => theme.font.lineHeight.text}; 
    color: ${({ theme }) => theme.color.text.primary};
    margin: 1em 0 1.5em;
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    line-height: inherit;
    font-family: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    padding: 0;
    color: inherit;
  }

  img {
    height: auto;
    max-width: 100%;
  }
`;

export default GlobalStyle;
