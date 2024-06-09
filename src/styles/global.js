import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: boder-box;
        font-family: "overpass", sans-serify;
    }


    :root {
        font-size : 62.5%
    }



    body {
        font-size: 1.6rem;
        background: ${props => props.theme.homeBackground};

        height: 100shv;
        display:flex;
        justify-content:center;
        align-item: center;
    }
`
