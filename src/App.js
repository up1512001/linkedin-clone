import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
        {/* <h1>let's build up1512001</h1> */}


        {/* Header */}
        <Header/>

        {/* Body */}
            {/* sidebar */}
            {/* feed */}
            {/* widgets */}

        <div className='app__body'>
          <Sidebar />
        </div>

    </div>
  );
}

export default App;
