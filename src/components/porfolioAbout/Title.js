import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className="degree">
        <h5 className="degree__institute">{this.props.academy.institute} </h5>
        <p className="degree__field">{this.props.academy.fieldOfStudy}</p>
        <p className="degree__dates">{this.props.academy.dates}</p>
      </div>
    );
  }
}

export default Title;
