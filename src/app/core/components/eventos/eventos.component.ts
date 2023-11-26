import { AfterViewInit, AfterContentInit, Component, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, tap } from 'rxjs';
import Evento from '../../models/Evento';
import { EventoService } from '../../services/evento.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {}
