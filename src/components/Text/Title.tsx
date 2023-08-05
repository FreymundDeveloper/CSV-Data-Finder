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

    @media (max-width: 620px) {
            font-size: 40px;
            width: 80%;
            min-height: 100px;
            margin-top: 50px;
        };
`;