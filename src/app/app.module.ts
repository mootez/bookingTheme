import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { OffresComponent } from './offres/offres.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { VoyagerComponent } from './voyager/voyager.component';
import { CultureComponent } from './culture/culture.component';
import { FamilleComponent } from './famille/famille.component';
import { VisiterComponent } from './visiter/visiter.component';
import { PratiquerComponent } from './pratiquer/pratiquer.component';
import { AmuserComponent } from './amuser/amuser.component';
import { CoupleComponent } from './couple/couple.component';
import { SoloComponent } from './solo/solo.component';
import { JeuneAdosComponent } from './jeune-ados/jeune-ados.component';
import { ScolaireComponent } from './scolaire/scolaire.component';
import { GroupeComponent } from './groupe/groupe.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    HomeComponent,
    VoyagerComponent,
    CultureComponent,
    FamilleComponent,
    VisiterComponent,
    PratiquerComponent,
    AmuserComponent,
    CoupleComponent,
    SoloComponent,
    JeuneAdosComponent,
    ScolaireComponent,
    GroupeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMVIWOJ5dI68uNNezGdoT0YRN1RhhwFeU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
