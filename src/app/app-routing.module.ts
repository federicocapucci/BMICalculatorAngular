import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadosComponent } from './components/resultados/resultados.component';

const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'resultado/:value' , component: ResultadosComponent},
  {path: '**' , redirectTo: ""} //redirects to main page if user enters invalid routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
