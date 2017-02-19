import { BodyComponent } from './body.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar.component';
import { blogModel,postModel } from './models';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent, BodyComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
