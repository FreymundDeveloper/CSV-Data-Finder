import { styled } from "styled-components";

export const Title = styled.h1`
    font-size: 70px;
    color: #fff;
    animation: flipTitle 1s;
    
    @keyframes flipTitle{
        from{
            transform: rotateX(90deg);
        }
        to{
            transform: rotateX(0deg);
        };
    };
`;