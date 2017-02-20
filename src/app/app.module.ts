import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { BodyComponent } from './components/body.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
