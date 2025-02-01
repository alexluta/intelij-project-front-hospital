import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AsistentaComponent } from './asistenta/asistenta.component';
import { MedicComponent } from './medic/medic.component';
import { PacientComponent } from './pacient/pacient.component';
import { SalonComponent } from './salon/salon.component';
import { SectieComponent } from './sectie/sectie.component';
import { TratamentComponent } from './tratament/tratament.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/asistenta', pathMatch: 'full' }, // ruta implicită
  { path: 'asistenta', component: AsistentaComponent },
  { path: 'medic', component: MedicComponent },
  { path: 'pacient', component: PacientComponent },
  { path: 'salon', component: SalonComponent },
  { path: 'sectie', component: SectieComponent },
  { path: 'tratament', component: TratamentComponent },
  { path: 'user', component: UserComponent },
];


// export const routes: Routes = [
//   { path: '', component: HomeComponent }, // ruta principală
//   { path: 'about', component: AboutComponent }, // ruta pentru pagina "About"
//   // adaugă mai multe rute după necesități
// ];
