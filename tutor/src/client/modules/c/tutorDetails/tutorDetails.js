import {LightningElement} from 'lwc';

export default class TutorDetails extends LightningElement {

    name = 'Rebecca';
    details = 'Rebecca has five years experience tutoring in Math specializing in Algebra.  She has three years studying advanced Sciences such as Chemistry, Physics and Biology.  In Languages she is fluent in French and Spanish';
    
    showDetails = true;
    //change the text on the button
    actionButtonLabel = 'Show Details';
     //hide and show details of the tutor
    toggleDetails(){
        this.showDetails = !this.showDetails;
        this.actionButtonLabel = this.showDetails ? 'Hide Details':'Show Details';
        console.log(this.showDetails);
    }
}