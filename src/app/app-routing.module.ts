import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresComponent }      from './offres/offres.component';
import { HomeComponent }      from './home/home.component';
import { VoyagerComponent }      from './voyager/voyager.component';


const routes: Routes = [
  { path: 'offres', component: OffresComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'voyager', component: VoyagerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
