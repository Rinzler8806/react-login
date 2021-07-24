import React from 'react';
import './App.css';
import Form from './Form';
import wallstreet from './images/wallstreet.png';

function App() {
  return (
    <div className="App">
      <div className="overlay"
      style={{backgroundImage: `url(${wallstreet})`}} />
            <Form />
    </div>
  );
}

export default App;
