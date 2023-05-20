import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
}
  
.hide {
    transform: translateX(-100%);
  }
.show {
  transform: translateX(0%);
}

.hide-searchbar{
  display: none;
}
`;

export default GlobalStyle;
