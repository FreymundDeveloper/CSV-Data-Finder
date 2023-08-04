import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme?: ThemeType }>`
    *{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    };
    
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        width: 300px;
        border-radius: 8px;
    }
    
    @media (max-width: 620px){
        .title{
            font-size: 40px;
        }
    
        .main{
            width: 80%;
            min-height: 200px;
        }
    }

`

