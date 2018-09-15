import React, { Component } from "react";
import ShowHideTech from "./ShowHideTech";
import FilterProjects from "./FilterProjects";

class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <ShowHideTech />
        <FilterProjects projectData={this.props.projectData} />
      </React.Fragment>
    );
  }
}
export default Projects;
