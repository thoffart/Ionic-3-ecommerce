import { SettingsProvider } from "./../../providers/settings/settings";
import { QuotePage } from "./../quote/quote";
import { QuotesProvider } from "./../../providers/quotes/quotes";
import { OnInit } from "@angular/core";
import { Quote } from "./../../data/quote.interface";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  MenuController
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
    private modalctrl: ModalController,
    private setpro: SettingsProvider
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
    modal.onDidDismiss(remove => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesprovider.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesprovider.getFavoriteQuote();
  }

  getBackground() {
    return this.setpro.isAltBackground()
      ? "altQuoteBackground"
      : "quoteBackground";
  }

  isAltBackground() {
    return this.setpro.isAltBackground();
  }
}
