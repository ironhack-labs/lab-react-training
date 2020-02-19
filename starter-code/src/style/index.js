import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body, html{
    padding: 0;
    margin: 0;
  }
  body{
  margin: 0;
  padding: 0;
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #5b8c85;
  }
  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;