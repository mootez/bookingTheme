import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OffresComponent } from './offres/offres.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { VoyagerComponent } from './voyager/voyager.component';
import { CultureComponent } from './culture/culture.component';
import { FamilleComponent } from './famille/famille.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    HomeComponent,
    VoyagerComponent,
    CultureComponent,
    FamilleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
