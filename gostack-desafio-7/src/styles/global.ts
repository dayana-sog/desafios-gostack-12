import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }

  .toast {
    background-color: #ffbb00;
    font-size: 14px;
    color: #363F5F;
    font-weight: bold;
  }
`;
