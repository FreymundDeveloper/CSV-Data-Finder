import { render } from '@testing-library/react';
import App from './App';
import { ContainerHome, InputSearch, InputFile, CardGenerator } from './components';
import request from 'supertest';
import app from '../backend/src/index';

// Front-End Tests
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

// Back-End Tests
describe('Status 200 return test', () => {
    it('Route Get', async () => {
        const response = await request(app).get('/api/users?q=');
      
        expect(response.status).toBe(200);
    });

    it('Route Post', async () => {
        const response = await request(app).post('/api/files').attach('file', 'backend/src/data/data_generate.csv');
    
        expect(response.status).toBe(200);
    });
  });