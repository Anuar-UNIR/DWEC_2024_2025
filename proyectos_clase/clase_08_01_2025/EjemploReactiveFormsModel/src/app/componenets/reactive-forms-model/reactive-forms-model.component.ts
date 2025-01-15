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
  isNewObject: boolean = true;

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

  ngOnInit(): void{
    let miUser: Iuser = {
      name: 'Fernado Alonso',
      email: 'alonso@astonf1.com',
      edad: 43,
      dni: '72358245T',
      password: 'aston12345',
      repitePassword: 'aston12345'
    }
    this.isNewObject = false;

    //Opcion 1
    //this.modelForm.setValue(miUser);

    //Opcion 2: Puedo meter mis propios validadores al cargar, modificar los que tenia, o no cargar controles.
    this.modelForm = new FormGroup({
      name: new FormControl(miUser.name, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(miUser.email, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      edad: new FormControl(miUser.edad, [Validators.required, Validators.min(0), Validators.max(120)]),
      dni: new FormControl(miUser.dni, [Validators.required, Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)]),
      password: new FormControl(miUser.password, [Validators.required, Validators.minLength(5)]),
      repitePassword: new FormControl(miUser.repitePassword, [Validators.required, Validators.minLength(5)]),
    }, [this.passValidator])

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
