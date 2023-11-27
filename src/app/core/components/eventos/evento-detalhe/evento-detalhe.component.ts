import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent {

    public form: FormGroup = new FormGroup({
        local: new FormControl('', Validators.required),
        dataEvento: new FormControl('', Validators.required),
        tema: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
        qntPessoas: new FormControl(0, [Validators.required, Validators.max(10000)]),
        imageURL: new FormControl('', Validators.required),
        telefone: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    public isNameTemaGabriel(): ValidatorFn {
        return control => {
            const value = control.value as string;

            if (value.includes('Gabriel')) {
                return { noGabriel: 'seu bosta'}
            }
            return null;

        }
    }


}
