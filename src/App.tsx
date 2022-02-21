import React from 'react';

import './App.css';

import {Header} from './components/header/header';
import {RoutingConfig} from './routing/routing';

function App() {

    return (
        <div className='App'>
            <Header/>
            <RoutingConfig/>
        </div>
    );
}

export default App;
