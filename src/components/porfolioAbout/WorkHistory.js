import React, {Component} from 'react'
import Job from './Job'

class WorkHistory extends Component {
  render() {
    //console.log('???');
    /* receive `jobsList` array as props from App compnonent */

    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from the each job object
                    to the <Job> component as props...
            */
           this.props.jobsList.map(element=>{
             return <Job key={element} job={element} />
           })
          }
        </div>
      </section>
    )
  }
}

export default WorkHistory;
