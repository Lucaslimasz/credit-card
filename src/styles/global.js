import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        list-style: none;
        text-decoration: none;
    }
    body{
        background: #2a2c2e;
        color: #fff;
        font-family: 'Roboto', sans-serif;
    }
    button,
    input,
    text-area{
        font-family: 'Roboto', sans-serif;
        border: 0;
        outline: none;
    }
    button{
        cursor: pointer;
    }

`;
