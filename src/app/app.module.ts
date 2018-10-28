import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OffresComponent } from './offres/offres.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { VoyagerComponent } from './voyager/voyager.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    HomeComponent,
    VoyagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
