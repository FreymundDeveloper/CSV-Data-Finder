import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './themes/styles.css'

function App() {
  return (
    <div className="container">
      <h1 className='title'>CSV Data Finder</h1>
      
      <div className='buttonFileSelect'>
        <h2>File</h2>
      </div>

      <div className='containerInput'>
        <input type='text' placeholder='Enter some feature...'/>

        <button className='buttonSearch'>
          <FiSearch size={25} color='#FFF'/>
        </button>
      </div>

      <main className='main'>
        <h2>Date</h2>

      </main>

    </div>
  );
}

export default App;
