import React, { useState } from 'react';
import { Title, ContainerHome, InputSearch, InputFile, CardGenerator } from '../components';

export const Home = () => {
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [queryParams, setQueryParams] = useState('');

    const handleFileUpload = (responseData: any) => {
        console.log('Server Response:', responseData);
        setIsFileSelected(true);
    };

    const handleChangeQueryParam = (value: string) => {
        setQueryParams(value);
    };
    
    return (
    <ContainerHome>
        <Title>CSV Data Finder</Title>
        
        <InputFile onUpload={handleFileUpload} />

        <InputSearch onChangeQueryParam={handleChangeQueryParam}/>

        <CardGenerator queryParams={queryParams} isFileSelected={isFileSelected} setIsFileSelected={setIsFileSelected} />

    </ContainerHome>
);
}