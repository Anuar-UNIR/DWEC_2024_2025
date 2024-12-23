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
            name: new FormControl(null, [Validators.required]), 
        email: new FormControl(null, [Validators.required ]), 
        edad: new FormControl(null, [Validators.required] ),
        dni: new FormControl(null, [Validators.required ]), 
        password: new FormControl(null, [Validators.required]),
        repitePassword: new FormControl(null, [Validators.required])
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
