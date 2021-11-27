import { LightningElement } from 'lwc';

export default class Subjects extends LightningElement {

    // This is a field of the class. An instance of a field is called a property
    btnLabel = "Hide";
    detailsActive = true;

    mySubjects = [
        { name: "Math", image: "https://media.istockphoto.com/photos/elementary-girl-wearing-protective-face-mask-at-school-picture-id1275847596" },
        { name: "Science", image: "https://media.istockphoto.com/photos/group-of-multiethnic-students-in-chemistry-lab-picture-id469951129" },
        { name: "Languages", image: "https://media.istockphoto.com/photos/learning-foreign-languages-picture-id178980215?k=20&m=178980215&s=612x612&w=0&h=VYQ2PxKupjjV5a3fJTqV7co-yUu3mRt1avtT9efU8R0=" }
    ];

    // We're not manipulating the DOM here! Very important, we only change our properties
    handleClick() {
        this.detailsActive = !this.detailsActive;
        this.btnLabel = (!this.detailsActive ? "Show" : "Hide");
    }
}