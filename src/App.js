import React, { Component } from 'react';
import './css/styles.css';
import PorfolioFixed from './components/PortfolioFixed';
import PorfolioContent from './components/PortfolioContent';

class App extends Component {
    render() {
        return (<div>
                    <PorfolioFixed/>
                    <PorfolioContent/>
                </div>);
    }
}

export default App;