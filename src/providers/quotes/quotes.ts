import { Quote } from "./../../data/quote.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class QuotesProvider {
  private favoritesQuotes: Quote[] = [];

  constructor(public http: HttpClient) {}

  addQuoteFavorites(quote: Quote) {
    this.favoritesQuotes.push(quote);
    console.log(this.favoritesQuotes);
  }

  removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoritesQuotes.findIndex((quoteEL: Quote) => {
      return quoteEL.id == quote.id;
    });
    this.favoritesQuotes.splice(position, 1);
  }

  getFavoriteQuote() {
    return this.favoritesQuotes.slice();
  }

  isQuoteFavorite(quote: Quote) {
    return this.favoritesQuotes.find((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
  }
}
