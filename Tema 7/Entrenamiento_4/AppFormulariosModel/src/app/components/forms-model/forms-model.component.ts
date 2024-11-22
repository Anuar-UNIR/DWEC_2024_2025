import { Component } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms-model',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './forms-model.component.html',
    styleUrl: './forms-model.component.css'
})

export class FormsModelComponent {

    modelForm: FormGroup;

    constructor() {
        this.modelForm = new FormGroup({
            name: new FormControl(null, [Validators.required, Validators.minLength(3)]), //donde tengo el null puedo insertar valores
            email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]), 
            edad: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)] ),
            dni: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)]), //this.dniValidador()
            password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
            repitePassword: new FormControl(null, [Validators.required, Validators.minLength(5)])
        },[]);
    }

    getDataForm() {
        console.log(this.modelForm.value);
        this.modelForm.reset();
    }

    checkControl(formControlName: string, validador: string): boolean | undefined{
        return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched
    }

}
