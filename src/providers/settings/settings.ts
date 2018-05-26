import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {
  private altBackground = false;

  constructor(public http: HttpClient) {
    console.log("Hello SettingsProvider Provider");
  }

  setBackground(isAlt: boolean) {
    this.altBackground = isAlt;
  }

  isAltBackground() {
    return this.altBackground;
  }
}
