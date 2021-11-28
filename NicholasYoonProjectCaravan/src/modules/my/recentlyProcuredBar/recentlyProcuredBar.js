import { LightningElement } from 'lwc';

export default class RecentlyProcuredBar extends LightningElement {
    itemList = [
        {
            ProductID : "1",
            ProductName : "Rejuvinating Potion",
            ProductPicURL : "./resources/images/potion1.png",
            CurrentBid: "$14"
        },
        {
            ProductID : "2",
            ProductName : "Unidentified Grimoire",
            ProductPicURL : "./resources/images/grimoire.png",
            CurrentBid: "$2,204"
        },
        {
            ProductID : "3",
            ProductName : "Enchanted Halberd",
            ProductPicURL : "./resources/images/halberd.png",
            CurrentBid: "$1,436"
        },
        {
            ProductID : "4",
            ProductName : "Tier 3 Spell Scroll",
            ProductPicURL : "./resources/images/scroll1.png",
            CurrentBid: "$89"
        },
        {
            ProductID : "5",
            ProductName : "Damascus Longsword",
            ProductPicURL : "./resources/images/sword1.png",
            CurrentBid: "$2,967"
        },
    ]
    
    constructor() {
        super();
        
    }
}