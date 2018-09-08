import React, {Component} from 'react'
import Title from './Title';

class EducationHistory extends Component {
  render() {

    /* receive `eduList` array as props from App compnonent */

    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          { /*
              map over jobsList array and return an array of <Job/> components
              NOTE: you must pass values from each education object
                    to the <EduTitle> component as props...
            */
           this.props.listAcademy.map(element=>{
            return <Title key={element} academy={element} />
           })
          }

        </div>
      </section>
    )
  }
}

export default EducationHistory;
