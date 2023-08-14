import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        /* font-family: Arial, Helvetica, sans-serif; */
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar{
        width: 15px;
    }

    /* ::-webkit-scrollbar-track{
        background-color: white;
    } */

    ::-webkit-scrollbar-thumb{
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: 6px;
        border: 2px solid transparent;
        background-clip: content-box;
    }

    html{
        scroll-behavior: smooth;
    }

    .h1-animation{
        position: relative;
        padding-bottom: 10px;
        transition: all 1s;
    }

    .h1-animation::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 4px solid black;
        width: 25%;
        transition: all 1s;
    }

    .h1-animation:hover::after{
        width: 100%;
        border-color: ${({theme}) => theme.colors.primary};
        }

    .h1-animation:hover{
        color: ${({theme}) => theme.colors.primary};
    }

    @media (max-width: ${({theme}) => theme.media.tab}) {
        .h1-animation::after{
            width: 100%;
        }
    }
`