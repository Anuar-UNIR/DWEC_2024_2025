import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
      name: new FormControl(null, []),
      email: new FormControl(null, []),
      edad: new FormControl(null, []),
      dni: new FormControl(null, []),
      password: new FormControl(null, []),
      repitePassword: new FormControl(null, []),
    }, [])

    this.arrUsers = [];
  }

  getDataForm() {
    let user: Iuser = this.modelForm.value as Iuser;
    this.arrUsers.push(user);
    console.log(this.arrUsers);
    this.modelForm.reset();
  }

}
