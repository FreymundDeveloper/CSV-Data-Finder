import React from 'react';
import styled from 'styled-components';

export const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
    if (message === '') {
        return null;
    }

    return (
        <AlertContainer>
            {message}
            <CloseButton onClick={onClose}>&times;</CloseButton>
        </AlertContainer>
    );
};

const AlertContainer = styled.div`
    background-color: #1d1919;
    color: white;
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    display: block;
`;

const CloseButton = styled.span`
    color: #959393;
    float: right;
    font-weight: bold;
    margin-left: 4px;
    cursor: pointer;
`;

type AlertProps = {
    message: string;
    onClose: () => void;
};
