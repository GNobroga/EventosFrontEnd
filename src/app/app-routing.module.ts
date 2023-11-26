import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './core/components/eventos/eventos.component';
import { PalestrantesComponent } from './core/components/palestrantes/palestrantes.component';
import { ContatosComponent } from './core/components/contatos/contatos.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { PerfilComponent } from './core/components/user/perfil/perfil.component';
import { EventoListaComponent } from './core/components/eventos/evento-lista/evento-lista.component';
import { EventoDetalheComponent } from './core/components/eventos/evento-detalhe/evento-detalhe.component';
import { UserComponent } from './core/components/user/user.component';
import { LoginComponent } from './core/components/user/login/login.component';
import { RegistrationComponent } from './core/components/user/registration/registration.component';

const routes: Routes = [
    {
        path: 'user', component: UserComponent, children: [
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'registration', component: RegistrationComponent
            }
        ]
    },
    {
        path: 'user/perfil', component: PerfilComponent, title: 'Perfil'
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'eventos'
    },
    {
        path: 'eventos', redirectTo: 'eventos/lista',
    },
    {
        path: 'eventos', component: EventosComponent, title: 'Eventos', children: [
            {
                path: 'lista', component: EventoListaComponent,
            },
            {
                path: 'detalhe', component: EventoDetalheComponent,
            },
            {
                path: 'detalhe/:id', component: EventoDetalheComponent,
            }
        ]
    },
    {
        path: 'palestrantes', component: PalestrantesComponent, title: 'Palestrantes'
    },
    {
        path: 'contatos', component: ContatosComponent, title: 'Contato'
    },
    {
        path: 'dashboard', component: DashboardComponent, title: 'Dashboard'
    },
    {
        path: '**', redirectTo: 'dashboard', pathMatch: 'full',
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
