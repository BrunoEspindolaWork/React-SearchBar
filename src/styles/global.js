

import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
  }

  p, input, td, th {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }


  button, input {
    border: 0px;
    outline: 0px;
  }

`