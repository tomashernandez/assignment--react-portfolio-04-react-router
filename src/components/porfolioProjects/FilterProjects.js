import React, { Component } from "react";
import Project from "./Project";
/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       you will want to map to an array of <Project/> components

   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()
 */

class FilterProjects extends Component {
  state = {
    type: "all",
    projectData: this.props.projectData
  };

  handleClickSpan = event => {
    const d = this.filterProjects(event.target.dataset.ptype);
    this.setState({
      type: event.target.dataset.ptype,
      projectData: d
    });
    console.log(d);
  };

  filterProjects = tipo =>
    this.props.projectData.filter(element => {
      if (tipo === "all") {
        return element;
      } else if (tipo === "solo") {
        return element.solo;
      } else {
        return !element.solo;
      }
    });

  render() {
    const projectSelectedClassVal = "project-type--selected";
    let allSelectedRenderedClass = "";
    let soloSelectedRenderedClass = "";
    let teamSelectedRenderedClass = "";

    if (this.state.type === "solo") {
      soloSelectedRenderedClass = projectSelectedClassVal;
    } else if (this.state.type === "team") {
      teamSelectedRenderedClass = projectSelectedClassVal;
    } else {
      allSelectedRenderedClass = projectSelectedClassVal;
    }
    this.filterProjects(this.state.type);
    return (
      <section>
        <h4>Projects</h4>
        <div className="project-types-list">
          <span
            data-ptype="all"
            onClick={this.handleClickSpan}
            className={`project-type project-type--all ${allSelectedRenderedClass}`}
          >
            All
          </span>
          <span
            data-ptype="solo"
            onClick={this.handleClickSpan}
            className={`project-type project-type--solo ${soloSelectedRenderedClass}`}
          >
            <i className="ion-person" />
            Solo
          </span>
          <span
            data-ptype="team"
            onClick={this.handleClickSpan}
            className={`project-type project-type--team ${teamSelectedRenderedClass}`}
          >
            <i className="ion-person-stalker" />
            Team
          </span>
        </div>

        <div className="projects-list">
          {this.state.projectData.map((element, index) => {
            return (
              <Project
                key={element + index}
                projectName={element.projectName}
                projectKind={element.solo}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
export default FilterProjects;
