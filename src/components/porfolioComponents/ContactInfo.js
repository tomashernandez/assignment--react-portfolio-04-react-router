import React, { Component } from 'react';

class ContactInfo extends Component{
    render(){
        return(
            <section>
            <div className="contactinfo">
              <a className="contactinfo__single" target="_blank">
                <i className="ion-ios-location-outline contactinfo__icon"></i>
                <span className="contactinfo__title">Acapulco, Gro,México</span>
              </a>
              <a href="" className="contactinfo__single" target="_blank">
                <i className="ion-ios-email-outline contactinfo__icon"></i>
                <span className="contactinfo__title">ha.tomas9@gmail.com</span>
              </a>
              <a href="" className="contactinfo__single" target="_blank">
                <i className="ion-social-github-outline contactinfo__icon"></i>
                <span className="contactinfo__title">tomashernandez</span>
              </a>
              <a href="" className="contactinfo__single" target="_blank">
                <i className="ion-social-linkedin-outline contactinfo__icon"></i>
                <span className="contactinfo__title">----</span>
              </a>
            </div>
          </section>
        );
    }
}
export default ContactInfo