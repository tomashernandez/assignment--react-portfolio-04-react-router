import React,{ Component } from 'react';

import Header from './porfolioComponents/Header';
import Summary from './porfolioComponents/Summary';
import ContactInfo from './porfolioComponents/ContactInfo';

import SkillsList from './porfolioAbout/SkillsList';
import EducationHistory from './porfolioAbout/EducationHistory';
import WorkHistory from './porfolioAbout/WorkHistory';

import ShowHideTech from './porfolioProjects/ShowHideTech';
import FilterProjects from './porfolioProjects/FilterProjects';


class PorfolioContent extends Component{
    render(){
        
        return (
            
            <div className="portfolio-content">
            {/*Primera Clase*/}
            <Header/>
            <Summary/>
            <ContactInfo/> 
            {/*Segunda Clase*/}
            <SkillsList skills={this.props.data.skills}/>
            <EducationHistory listAcademy={this.props.data.listAcademy}/>
            <WorkHistory  jobsList={this.props.data.jobsList}/>
            {/*Tercera Clase*/}
            <ShowHideTech/>
            <FilterProjects projectData={this.props.projectData}/>

            </div>
        );
    }
}

export default PorfolioContent