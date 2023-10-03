import React, { useState } from 'react';
import { Title, ContainerHome, InputSearch, InputFile, CardGenerator } from '../components';

export const Home = () => {
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [queryParams, setQueryParams] = useState('');

    const handleFileUpload = (responseData: any) => {
        console.log('Resposta do servidor:', responseData);
        setQueryParams('');
        setIsFileSelected(true);
    };

    const handleChangeQueryParam = (value: any) => {
        setQueryParams(value);
    };
    return (
    <ContainerHome>
        <Title>CSV Data Finder</Title>
        
        <InputFile onUpload={handleFileUpload} isFileSelected={isFileSelected} />

        <InputSearch onChangeQueryParam={handleChangeQueryParam}/>

        <CardGenerator queryParams={queryParams} isFileSelected={isFileSelected} setIsFileSelected={setIsFileSelected} />

    </ContainerHome>
);
}