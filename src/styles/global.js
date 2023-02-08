import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  .center {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 58px 12px;
  }

  .react-icons {
    vertical-align: middle;
  }
`;

export default GlobalStyle;
