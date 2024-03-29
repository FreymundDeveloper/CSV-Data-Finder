import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { styled } from 'styled-components';
import { Alert } from '../Container/ContainerAlert';

type CardGeneratorProps = {
    queryParams: string;
    isFileSelected: boolean; 
    setIsFileSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CardGenerator: React.FC<CardGeneratorProps> = ({ queryParams, isFileSelected, setIsFileSelected }) => {
    const [jsonData, setJsonData] = useState<{ [key: string]: string }[]>([]);
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
    const [searchNotFount, setSearchNotFount] = useState<boolean>(false);

    const fetchOriginalData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/users?q=`);
            setJsonData(response.data);
            setIsDataLoaded(true);
            setSearchNotFount(true); 
        } catch (error) {
            console.error('Error returned:', error);
        }
    }, []);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/users?q=${queryParams}`);
            setJsonData(response.data);
            setIsDataLoaded(true);
            setSearchNotFount(false);
        } catch (error) {
            console.error('Error returned:', error);
            if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
                fetchOriginalData(); 
            };
        }
    }, [queryParams, fetchOriginalData]);

    useEffect(() => {
        if (isFileSelected || (queryParams !== '' && isDataLoaded)) {
            fetchData();
            setIsFileSelected(false);
        }
    }, [fetchData, setIsFileSelected, isFileSelected, queryParams, isDataLoaded]);

    function chunkArray(arr: any[], size: number) {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    }

    const chunkedData = chunkArray(jsonData, 3);
    const columns = chunkArray(chunkedData, 3);

    return (
        <React.Fragment>
            <Alert message={searchNotFount ? "No results found - Content reloaded" : ""} onClose={() => setSearchNotFount(false)} />
            <CardGrid>
            {isDataLoaded &&
                columns.map((columnGroup, columnIndex) => (
                <CardGroup key={columnIndex}>
                    {columnGroup.map((rowGroup, rowIndex) => (
                    <CardRow key={rowIndex}>
                        {rowGroup.map((data: { [key: string]: string }, dataIndex: number) => (
                        <CardContainer key={dataIndex}>
                            {Object.keys(data).map((key) => (
                            <CardContent key={key}>
                                <CardTitle>{key}:</CardTitle>
                                <CardDescription>{data[key]}</CardDescription>
                            </CardContent>
                            ))}
                        </CardContainer>
                        ))}
                    </CardRow>
                    ))}
                </CardGroup>
                ))}
            </CardGrid>
        </React.Fragment>
    );
};

const CardGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
 `;

const CardGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const CardRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 5px;
`;

const CardContainer = styled.div`
    width: 200px;
    max-height: 600px;
    min-height: 200px;
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 20px;
    flex-basis: calc(33.33% - 50px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.color.mainColor};
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 548px) {
        max-width: 100px;
    }
`;

const CardContent = styled.div`
    margin-bottom: 8px;
`;

const CardTitle = styled.h2`
    font-size: 18px;
    margin-bottom: 5px;
`;

const CardDescription = styled.p`
    font-size: 14px;
    color: #fff;
`;
