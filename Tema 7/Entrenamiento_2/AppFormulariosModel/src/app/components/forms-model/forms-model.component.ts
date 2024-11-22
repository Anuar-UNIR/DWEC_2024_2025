import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
      name: new FormControl(null, []), 
      email: new FormControl(null, []),
      edad: new FormControl(null, []),
      dni: new FormControl(null, []),
      password: new FormControl(null, []),
      repitePassword: new FormControl(null, [])
    }, []);
  }

  getDataForm() {
    console.log(this.modelForm.value);
    this.modelForm.reset();
  
  }

}
