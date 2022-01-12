import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
import Body from './components/Body'

function App(){
    return(
        <div className="App">
            <Data name="Aamir"></Data>

            <Body name="aamir"></Body>
        </div>

    );
}

export default App;