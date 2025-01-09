import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iuser } from '../../interfaces/iuser';

@Component({
  selector: 'app-reactive-forms-model',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms-model.component.html',
  styleUrl: './reactive-forms-model.component.css'
})
export class ReactiveFormsModelComponent {

  arrUsers: Iuser[];
  
  modelForm: FormGroup;

  constructor() {
    this.modelForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      edad: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
      dni: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      repitePassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    }, [this.passValidator])

    this.arrUsers = [];
  }

  getDataForm() {
    let user: Iuser = this.modelForm.value as Iuser;
    this.arrUsers.push(user);
    console.log(this.arrUsers);
    this.modelForm.reset();
  }

  checkControl(formControlName: string, validador: string): boolean | undefined{
    return this.modelForm.get(formControlName)?.hasError(validador) && this.modelForm.get(formControlName)?.touched
  }

  passValidator(formValue: AbstractControl): any{
    const pass1 = formValue.get('password')?.value;
    const pass2 = formValue.get('repitePassword')?.value;
    return (pass1 != pass2) ? {'passwordnotmatches' : true} : null
  }

}
