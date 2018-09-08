import React, {Component} from 'react'

class Job extends Component {
  render() {
   
    return (
      <div className="job">
    <div className="job__years">
      <h6 className="job__end">{/* pass in data as props data in WorkHistory compnonent */ this.props.job.years.end }</h6>
      <h6 className="job__start">{/* pass props data in WorkHistory compnonent */this.props.job.years.start}</h6>
    </div>
    <h5 className="job__title">{/* pass in data as props data in WorkHistory compnonent */this.props.job.title}</h5>
    <h5 className="job__company">{/* pass  in data asprops data in WorkHistory compnonent */this.props.job.company}</h5>
    <p className="job__description">{/* pass in data as props data in WorkHistory compnonent */this.props.job.description}</p>
  </div>
    );
  }
}

export default Job
