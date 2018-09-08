import React, { Component } from 'react';
import {skills,listAcademy,jobsList} from './data/datasource';
import PorfolioFixed from './components/PortfolioFixed';
import PorfolioContent from './components/PortfolioContent';

class App extends Component {
    render() {
        let data={skills:skills,listAcademy:listAcademy,jobsList:jobsList};
        return (<div>
                    <PorfolioFixed/>
                    <PorfolioContent data={data} />
                </div>);
    }
}

export default App;