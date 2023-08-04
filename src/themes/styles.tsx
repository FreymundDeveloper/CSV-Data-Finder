import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme?: ThemeType }>`
    *{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    };

    .container{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: linear-gradient(${({ theme })=> theme.color.primary}, #212b46);
    }
    
    .title{
        font-size: 70px;
        color: #fff;
        animation: flipTitle 1s;
    }
    
    @keyframes flipTitle {
        from{
            transform: rotateX(90deg);
        }
        to{
            transform: rotateX(0deg);
        }
    }
    
    .containerInput{
        background-color: rgba(255, 255, 2555, 0.2);
        padding: 15px;
        margin: 34px 0;
        display: flex;
        border-radius: 8px;
        box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
    }
    
    .containerInput input{
        background-color: transparent;
        border: 0;
        font-size: 20px;
        color: #fff;
        outline: none;
        margin-right: 8px;
    }
    
    .containerInput input::placeholder{
        color: #f1f1f1;
    }
    
    .buttonSearch{
        background-color: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0,3s;
    }
    
    .buttonSearch:hover{
        transform: scale(1.2);
    }
    
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

