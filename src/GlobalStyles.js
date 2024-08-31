import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: lightgreen;
    --background-color: #f1f3c2;

    --text-color: #000000;
    --custom-image: url("https://www.transparenttextures.com/patterns/arches.png")
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  

  html, body {
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
background-image: var(--custom-image);
    color: var(--text-color);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

`;
