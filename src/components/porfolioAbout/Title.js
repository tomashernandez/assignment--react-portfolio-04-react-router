import React, {Component} from 'react'

class Title extends Component {
  render() {
    this.props.dates
    this.props.institute
   
    return (
      <div className="degree">
       <h5 className="degree__institute">{/*pass institute as props in EducationHistory component */this.props.academy.institute} </h5>
       <p className="degree__field">{/*pass field as props in EducationHistory */this.props.academy.fieldOfStudy}</p>
       <p className="degree__dates">{/*pass dates as props in EducationHistory */this.props.academy.dates}</p>
     </div>
    );
  }
}

export default Title
