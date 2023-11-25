import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './core/components/eventos/eventos.component';
import { PalestrantesComponent } from './core/components/palestrantes/palestrantes.component';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'eventos'
    },
    {
        path: 'eventos', component: EventosComponent
    },
    {
        path: 'palestrantes', component: PalestrantesComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
