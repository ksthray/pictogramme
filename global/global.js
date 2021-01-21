//styled components
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
        font-display: swap;
        font-family: 'Raleway', sans-serif;
        overflow-x: hidden;
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: white;
        }
        ::-webkit-scrollbar-thumb {
            background: ${({theme}) => theme.primaryRyde};
        }
        /* background: rgb(20,20,20);
        background: linear-gradient(45deg, rgba(20,20,20,1) 18%, rgba(0,0,0,1) 91%); */
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
    
`;
