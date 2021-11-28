import { LightningElement } from 'lwc';

export default class RecentlyProcuredBar extends LightningElement {
    itemList = [
        {
            ProductID : "1",
            ProductName : "Rejuvinating Potion",
            ProductPicURL : "./resources/images/newAuctionItems/potion1.png",
            CurrentBid: "$14",
            AuctionActive: true
        },
        {
            ProductID : "2",
            ProductName : "Unidentified Grimoire",
            ProductPicURL : "./resources/images/newAuctionItems/grimoire.png",
            CurrentBid: "$2,204",
            AuctionActive: true
        },
        {
            ProductID : "3",
            ProductName : "Enchanted Halberd",
            ProductPicURL : "./resources/images/newAuctionItems/halberd.png",
            CurrentBid: "$1,436",
            AuctionActive: true
        },
        {
            ProductID : "4",
            ProductName : "Tier 3 Spell Scroll",
            ProductPicURL : "./resources/images/newAuctionItems/scroll1.png",
            CurrentBid: "$89",
            AuctionActive: true
        },
        {
            ProductID : "5",
            ProductName : "Damascus Longsword",
            ProductPicURL : "./resources/images/newAuctionItems/sword1.png",
            CurrentBid: "$2,967",
            AuctionActive: true
        },
    ]
}