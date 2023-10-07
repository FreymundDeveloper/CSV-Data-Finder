import { render } from '@testing-library/react';
import App from './App';
import { ContainerHome, InputSearch, InputFile, CardGenerator } from './components';

test('Renders App without errors', () => {
    render(<App />);
});

test('Renders ContainerHome without errors', () => {
    render(<ContainerHome />);
});

test('Renders CardGenerator without errors', () => {
    render(<CardGenerator queryParams="" isFileSelected={false} setIsFileSelected={() => {}} />);
});

test('Renders InputFile without errors', () => {
    render(<InputFile onUpload={() => {}} isFileSelected={false} />);
});

test('Renders InputSearch without errors', () => {
    render(<InputSearch onChangeQueryParam={() => {}} />);
});

 
