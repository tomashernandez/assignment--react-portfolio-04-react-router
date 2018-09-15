import React, { Component } from "react";

import { skills, listAcademy, jobsList } from "./data/datasourceAbout";
import { projectData } from "./data/datasourceProjects";
import PorfolioFixed from "./components/PortfolioFixed";
import PorfolioContent from "./components/PortfolioContent";

class App extends Component {
  render() {
    let data = { skills: skills, listAcademy: listAcademy, jobsList: jobsList };
    return (
      <div>
        <PorfolioFixed />
        <PorfolioContent data={data} projectData={projectData} />
      </div>
    );
  }
}

export default App;
