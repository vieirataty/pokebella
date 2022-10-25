import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';

//Modules
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { BatalhaComponent } from './batalha/batalha.component';
import { PokeBotaoBatalhaComponent } from './poke-botao-batalha/poke-botao-batalha.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    BatalhaComponent,
    PokeBotaoBatalhaComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
