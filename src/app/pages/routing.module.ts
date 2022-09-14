import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { BatalhaComponent } from './batalha/batalha.component';

const routes: Routes = [
  {
    path:'', 
    component: HomeComponent
  },
  {
    path:'details/:id', 
    component: DetailsComponent
  },
  {
    path:'batalha/',
    component: BatalhaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
