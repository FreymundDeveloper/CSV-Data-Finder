import { FiSearch } from 'react-icons/fi';
import { Title, ContainerHome, ContainerInput, InputSearch, ButtonSearch } from '../components';

export const Home = () => {
  return (
    <ContainerHome>
      <Title>CSV Data Finder</Title>
      
      <div className='buttonFileSelect'>
        <h2>File</h2>
      </div>

      <ContainerInput>
        <InputSearch placeholder='Enter some feature...'/>

        <ButtonSearch>
            <FiSearch size={25} color='#FFF'/>
        </ButtonSearch>

      </ContainerInput>

      <main className='main'>
        <h2>Date</h2>

      </main>

    </ContainerHome>
  );
}