// ./src/components/App.js
import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

import Nav from './Nav';
import AnimatedSwitch from './AnimatedSwitch';

function App() {
    return (
        <Router>
            <nav>
                <h1>Routing</h1>
                <Nav/>
            </nav>            
            <AnimatedSwitch/>        
        </Router>
    );
}

export default App;
