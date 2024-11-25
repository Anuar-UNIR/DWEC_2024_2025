import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  registerStudents: FormGroup;

  constructor() {
    this.registerStudents = new FormGroup({
      nombre: new FormControl(null, []),
      edad: new FormControl(null, []),
      email: new FormControl(null, []),
      curso: new FormControl(null, []),
    }, []);  
  }

  
  getDataForm() {

  }

}
