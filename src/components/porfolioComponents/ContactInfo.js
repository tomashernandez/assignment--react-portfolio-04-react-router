import React, { Component } from 'react';

class ContactInfo extends Component{
    render(){
        return(
            <section>
            <div class="contactinfo">
              <a class="contactinfo__single" target="_blank">
                <i class="ion-ios-location-outline contactinfo__icon"></i>
                <span class="contactinfo__title">Acapulco, Gro,México</span>
              </a>
              <a href="#" class="contactinfo__single" target="_blank">
                <i class="ion-ios-email-outline contactinfo__icon"></i>
                <span class="contactinfo__title">ha.tomas9@gmail.com</span>
              </a>
              <a href="#" class="contactinfo__single" target="_blank">
                <i class="ion-social-github-outline contactinfo__icon"></i>
                <span class="contactinfo__title">tomashernandez</span>
              </a>
              <a href="#" class="contactinfo__single" target="_blank">
                <i class="ion-social-linkedin-outline contactinfo__icon"></i>
                <span class="contactinfo__title">----</span>
              </a>
            </div>
          </section>
        );
    }
}
export default ContactInfo