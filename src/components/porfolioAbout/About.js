import React, { Component } from "react";
import SkillsList from "./SkillsList";
import EducationHistory from "./EducationHistory";
import WorkHistory from "./WorkHistory";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <SkillsList skills={this.props.skills} />
        <EducationHistory listAcademy={this.props.listAcademy} />
        <WorkHistory jobsList={this.props.jobsList} />
      </React.Fragment>
    );
  }
}

export default About;
