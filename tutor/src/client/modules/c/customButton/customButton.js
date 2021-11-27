import { LightningElement, api } from "lwc";

export default class CustomButton extends LightningElement {

    // The API decorator allows a property to be accessed as an attribute on the component
    @api
    label;

    @api
    variant;
}