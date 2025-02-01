import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // importă RouterModule
import { AppComponent } from './app.component';
import { routes } from './app.routes'; // importă rutele definite

import { AsistentaComponent } from './asistenta/asistenta.component';
import { MedicComponent } from './medic/medic.component';
import { PacientComponent } from './pacient/pacient.component';
import { SalonComponent } from './salon/salon.component';
import { SectieComponent } from './sectie/sectie.component';
import { TratamentComponent } from './tratament/tratament.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AsistentaComponent,
    MedicComponent,
    PacientComponent,
    SalonComponent,
    SectieComponent,
    TratamentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // înregistrează rutele
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
