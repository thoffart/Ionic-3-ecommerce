import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TabsPage } from "./../pages/tabs/tabs";
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
import { FavoritesPageModule } from "../pages/favorites/favorites.module";
import { QuotesProvider } from "../providers/quotes/quotes";

@NgModule({
  declarations: [MyApp, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LibraryPageModule,
    QuotePageModule,
    QuotesPageModule,
    SettingsPageModule,
    FavoritesPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuotesProvider,
    HttpClient
  ]
})
export class AppModule {}
