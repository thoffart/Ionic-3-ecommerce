import { QuotePage } from "./../quote/quote";
import { QuotesProvider } from "./../../providers/quotes/quotes";
import { OnInit } from "@angular/core";
import { Quote } from "./../../data/quote.interface";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage implements OnInit {
  quotes: Quote[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesprovider: QuotesProvider,
    private modalctrl: ModalController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.quotes = this.quotesprovider.getFavoriteQuote();
    console.log(this.quotes);
  }

  addDelay(y: number) {
    let x = y * 0.25;
    return x.toString() + "s";
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalctrl.create(QuotePage, quote);
    modal.present();
  }
}
