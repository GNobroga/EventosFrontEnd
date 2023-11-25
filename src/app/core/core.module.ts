import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EventosComponent, PalestrantesComponent],
  exports: [EventosComponent, PalestrantesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    FormsModule
  ]
})
export class CoreModule { }
