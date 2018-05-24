import { Quote } from "./../../data/quote.interface";
import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage implements OnInit {
  Quotes: { category: string; quotes: Quote[]; icon: string };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(): void {
    this.Quotes = this.navParams.data;
    console.log(this.Quotes);
  }

  ionViewDidLoad() {
    //this.Quotes = this.navParams.data;
    // add (?) operator in the template to angular loads when the data is available <ion-title>{{Quotes?.category | uppercase}}</ion-title>
  }
}
