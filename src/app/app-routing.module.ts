import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresComponent }      from './offres/offres.component';
import { HomeComponent }      from './home/home.component';
import { VoyagerComponent }      from './voyager/voyager.component';
import { FamilleComponent }      from './famille/famille.component';
import { AmuserComponent }      from './amuser/amuser.component';
import { CoupleComponent }      from './couple/couple.component';
import { CultureComponent }      from './culture/culture.component';
import { GroupeComponent }      from './groupe/groupe.component';
import { SoloComponent }      from './solo/solo.component';
import { VisiterComponent }      from './visiter/visiter.component';
import { ScolaireComponent }      from './scolaire/scolaire.component';
import { PratiquerComponent }      from './pratiquer/pratiquer.component';
import { JeuneAdosComponent }      from './jeune-ados/jeune-ados.component';

const routes: Routes = [
  { path: 'offres', component: OffresComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'voyager', component: VoyagerComponent },
  { path: 'famille', component: FamilleComponent },
  { path: 'couple', component: CoupleComponent },
  { path: 'amuser', component: AmuserComponent },
  { path: 'culture', component: CultureComponent },
  { path: 'groupe', component: GroupeComponent },
  { path: 'solo', component: SoloComponent },
  { path: 'visiter', component: VisiterComponent },
  { path: 'scolaire', component: ScolaireComponent },
  { path: 'pratiquer', component: PratiquerComponent },
  { path: 'jeune', component: JeuneAdosComponent }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
