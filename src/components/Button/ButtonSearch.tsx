import { styled } from "styled-components";

export const ButtonSearch = styled.button`
    background-color: transparent;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0,3s;

    &:hover {
        transform: scale(1.2);
    }
`;