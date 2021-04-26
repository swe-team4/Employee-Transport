import React from 'react';
import logo from  './corvette.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>  TRANSPORT SYSTEM COMPANY.   
             <br/> 
             <br/>

             Welcome to the Transport System User Interface!
             
             
             
              </code> 
        </p>
        <a
          className="App-link"
          href="https://github.com/swe-team4/Employee-Transport"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here for more information.
        </a>
      </header>
    </div>
  );
}

export default App;
