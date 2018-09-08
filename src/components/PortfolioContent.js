import React,{ Component } from 'react';

// import Header from './porfolioComponents/Header';
// import Summary from './porfolioComponents/Summary';
// import ContactInfo from './porfolioComponents/ContactInfo';

import SkillsList from './porfolioAbout/SkillsList';
import EducationHistory from './porfolioAbout/EducationHistory';
import WorkHistory from './porfolioAbout/WorkHistory';


class PorfolioContent extends Component{
    render(){
        
        return (
            
            <div className="portfolio-content">
            <SkillsList skills={this.props.data.skills}/>
            <EducationHistory listAcademy={this.props.data.listAcademy}/>
            <WorkHistory  jobsList={this.props.data.jobsList}/>
                {/* <Header/>
                <Summary/>
                <ContactInfo/> */}

            </div>
        );
    }
}

export default PorfolioContent