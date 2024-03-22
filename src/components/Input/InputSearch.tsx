import { useState } from "react";
import { styled } from "styled-components";
import { FiSearch } from 'react-icons/fi';

type InputSearchProps = {
    onChangeQueryParam: (value: string) => void;
  };
  
export const InputSearch: React.FC<InputSearchProps> = ({ onChangeQueryParam }) => {
    const [value, setValue] = useState('');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onChangeQueryParam(value);
        setValue('')
    };
  
    return (
        <FormInput onSubmit={handleSubmit}>
            <InputSearchStyle type="text" value={value} onChange={handleChange} placeholder='Enter some feature...' />
            <ButtonSearch type="submit">
                <FiSearch size={25} color='#FFF'/>
            </ButtonSearch>
        </FormInput>
    );
  };
  


const InputSearchStyle = styled.input`
    background-color: transparent;
    border: 0;
    font-size: 20px;
    color: #fff;
    outline: none;
    margin-right: 8px;

    
    &::placeholder {
        color: #f1f1f1;
    }
`;

const ButtonSearch = styled.button`
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

const FormInput = styled.form`
    background-color: ${(props) => props.theme.color.mainColor};
    padding: 15px;
    margin: 34px 0;
    display: flex;
    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
`;
