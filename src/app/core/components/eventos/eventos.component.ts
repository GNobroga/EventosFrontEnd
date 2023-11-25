import { AfterViewInit, AfterContentInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, tap } from 'rxjs';
import Evento from '../../models/Evento';
import { EventoService } from '../../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements AfterViewInit {

    public eventos: Evento[] = [];
    public showImages: boolean = false;
    public search: string = '';
    public eventosFiltrados: Evento[] = [];

    @ViewChild("input") declare ref: ElementRef;

    constructor(private router: Router, private readonly _eventoService: EventoService) {
        _eventoService.obterTodos()
            .subscribe(value => {
                console.log(value);
                this.eventos = value;
                this.eventosFiltrados = this.eventos;
            });
    }

    public ngAfterViewInit() {
        fromEvent(this.ref.nativeElement, 'input')
        .subscribe((event: any) => {
            const value = event.target.value.trim().toLowerCase();
            // Filtrando se existir valor
            if (value) {
                this.eventosFiltrados = this.eventos
                    .filter(({ tema, local }) =>
                        tema.trim().toLowerCase().includes(value) || local.trim().toLowerCase().includes(value));
            } else {
                this.eventosFiltrados = this.eventos;
            }

        });
    }
}
