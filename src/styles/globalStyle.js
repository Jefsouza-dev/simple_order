import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

     body {
        margin: 0;
        padding: 0;
        box-sizing: 'border-box',;
        background: #EAF2FF
     }


     button {
         border: none;
         background: #FFFFFF;

         &:hover {
            cursor: pointer;
          }
      }

`;
