import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="container">
      <Header/>
      <div className='navdiv'>
        <Navigation />
        <Main>
          <div className='subdiv'>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <div className='advert'>
            <Advertisement/>
          </div>
        </Main>
        </div>
    </div>
  );
}
                
export default App;
