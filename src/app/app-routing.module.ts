import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrolistaComponent } from './components/registrolista/registrolista.component';
import { ReactivosComponent } from './components/reactivos/reactivos.component';

const routes: Routes = [
  {path:'template',component:RegistrolistaComponent},
  {path:'reactivo',component:ReactivosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
