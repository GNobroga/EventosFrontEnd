import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { fromEvent } from 'rxjs';
import Evento from 'src/app/core/models/Evento';
import { EventoService } from 'src/app/core/services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent {
    public eventos: Evento[] = [];
    public showImages = false;
    public search = '';
    public eventosFiltrados: Evento[] = [];
    public declare modalDeleteRef: BsModalRef

    @ViewChild("input") declare ref: ElementRef;

    constructor(
        private readonly _eventoService: EventoService,
        private _modalService: BsModalService,
        private _toastr: ToastrService,
        private _spinner: NgxSpinnerService
    ) {
        this._eventoService.obterTodos()
            .subscribe(value => {
                console.log(value);
                this.eventos = value;
                this.eventosFiltrados = this.eventos;
            });
        this._spinner.show();
        setTimeout(() => {
            this._spinner.hide();
          }, 1000);
    }

    public ngAfterViewInit() {
        fromEvent(this.ref.nativeElement, 'input')
        .subscribe((e: any) => {
            const value = e.target.value.trim().toLowerCase();

            if (value) {
                this.eventosFiltrados = this.eventos
                    .filter(({ tema, local }) =>
                        tema.trim().toLowerCase().includes(value) || local.trim().toLowerCase().includes(value));
            } else {
                this.eventosFiltrados = this.eventos;
            }

        });
    }

    public openModal(template: TemplateRef<any>): void {
        this.modalDeleteRef = this._modalService.show(template);
    }

    public confirm(): void {
        this.modalDeleteRef.hide();
        this._toastr.success("Deletado com sucesso!", "Evento");
    }

    public decline(): void {
        this.modalDeleteRef.hide();
    }
}
