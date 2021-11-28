import { LightningElement, api } from 'lwc';

export default class Header extends LightningElement {
    tabList = [
        {
            tabName: "New Arrivals",
            tabLink: "https://www.google.com/search?q=New_Arrivals"
        },
        {
            tabName: "Auctions",
            tabLink: "https://www.google.com/search?q=Auctions"
        },
        {
            tabName: "Consumables",
            tabLink: "https://www.google.com/search?q=Consumables"
        },
        {
            tabName: "Armor",
            tabLink: "https://www.google.com/search?q=Armor"
        },
        {
            tabName: "Melee Weaponry",
            tabLink: "https://www.google.com/search?q=Melee+Weaponry"
        },
        {
            tabName: "Ranged Weaponry",
            tabLink: "https://www.google.com/search?q=Ranged+Weaponry"
        },
        {
            tabName: "Magical Weaponry",
            tabLink: "https://www.google.com/search?q=Magical+Weaponry"
        },
        {
            tabName: "Ammunition",
            tabLink: "https://www.google.com/search?q=Ammunition"
        },
        {
            tabName: "Camping Gear",
            tabLink: "https://www.google.com/search?q=Camping+Gear"
        },
        {
            tabName: "Tools",
            tabLink: "https://www.google.com/search?q=Tools"
        },
        {
            tabName: "Raw Materials",
            tabLink: "https://www.google.com/search?q=Raw+Materials"
        }
    ]

    SelectedAddress = "lorem ipsum something";

    loggedIn = false;

    logIn() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }
}