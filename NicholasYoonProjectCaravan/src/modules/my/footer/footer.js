import { LightningElement, api } from 'lwc';

export default class Header extends LightningElement {

    backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}