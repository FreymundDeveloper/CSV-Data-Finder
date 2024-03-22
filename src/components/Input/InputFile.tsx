import React, { useRef, useState } from 'react';
import axios from 'axios';
import { styled } from "styled-components";

type InputFileProps = {
  onUpload: (responseData: any) => void;
};

export const InputFile: React.FC<InputFileProps> = ({ onUpload }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFileName, setSelectedFileName] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setSelectedFileName(selectedFile.name);
            uploadFile(selectedFile);
        }
    };

    const uploadFile = async (file: File) => {
        try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await axios.post('http://localhost:3000/api/files', formData);

        onUpload(response.data);
        } catch (error) {
            console.error('Erro ao enviar o arquivo:', error);
        }
    };

    return (
        <Container>
            <HiddenFileInput
                type="file"
                ref={fileInputRef}
                onChange={handleInputChange}
            />
            <SelectButton onClick={() => fileInputRef.current && fileInputRef.current.click()}>
                Select File
            </SelectButton>
            {selectedFileName && <FileName>{selectedFileName}</FileName>}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const SelectButton = styled.button`
    background-color: transparent;
    border-width: 2px;
    border-color: #fff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
    color: #fff;
    outline: none;
    margin-top: 8px;
    padding: 5px;
    transition: 0,8;

    &:hover {
        background-color: #7c7676;
    }
`;

const FileName = styled.span`
    margin-left: 10px;
    justify-content: center;
    display: flex;
    color: #a39999;
    margin-top: 8px;
`;
