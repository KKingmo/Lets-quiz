import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { breakPoints } from "./media";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *{
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      background: linear-gradient(180deg, #4823a6 0%, #c06dcf 100%);
      background-attachment: fixed;
      color: #fff;
      font-size: 16px;
      
      @media ${breakPoints.tablet} {
        font-size: 14px;
      }

      @media ${breakPoints.mobile} {
        font-size: 12px;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
    }

`;

export default GlobalStyle;
