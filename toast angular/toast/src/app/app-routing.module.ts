import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteNavegacionComponent } from './componente-navegacion/componente-navegacion.component';
import { ComponenteComponent } from './componente/componente.component';

const routes: Routes = [
  {path:'componente', component:ComponenteComponent},
  {path:'componenteNavegacion', component:ComponenteNavegacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
