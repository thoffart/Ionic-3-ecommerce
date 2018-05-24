import { QuotesPageModule } from "./../pages/quotes/quotes.module";
import { QuotePageModule } from "./../pages/quote/quote.module";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPageModule } from "../pages/library/library.module";
import { SettingsPageModule } from "../pages/settings/settings.module";

@NgModule({
  declarations: [MyApp, FavoritesPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LibraryPageModule,
    QuotePageModule,
    QuotesPageModule,
    SettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, FavoritesPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
