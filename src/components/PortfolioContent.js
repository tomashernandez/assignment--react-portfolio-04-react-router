import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import Home from "./porfolioComponents/Home";
import About from "./porfolioAbout/About";
import Projects from "./porfolioProjects/Projects";

class PorfolioContent extends Component {
  render() {
    return (
      <div className="portfolio-content">
        <div id="menu">
          <nav>
            <NavLink
              to="/"
              exact
              className="btn btn-pricing"
              activeClassName="active"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="btn btn-pricing"
              activeClassName="active"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="btn btn-pricing"
              activeClassName="active"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              Projects
            </NavLink>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/about"
            component={props => {
              return (
                <About
                  skills={this.props.data.skills}
                  listAcademy={this.props.data.listAcademy}
                  jobsList={this.props.data.jobsList}
                />
              );
            }}
          />
          <Route
            exact
            path="/projects"
            component={props => {
              return <Projects projectData={this.props.projectData} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default PorfolioContent;
