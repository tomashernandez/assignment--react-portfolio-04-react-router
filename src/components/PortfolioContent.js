import React,{ Component } from 'react';

import Header from './porfolioComponents/Header';
import Summary from './porfolioComponents/Summary';
import ContactInfo from './porfolioComponents/ContactInfo';


class PorfolioContent extends Component{
    render(){
        return (
            <div class="portfolio-content">
                <Header/>
                <Summary/>
                <ContactInfo/>
            </div>
        );
    }
}

export default PorfolioContent