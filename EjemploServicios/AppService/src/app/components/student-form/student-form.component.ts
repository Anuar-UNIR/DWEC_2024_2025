import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  registerStudents: FormGroup;
  studentServices = inject(StudentServiceService);

  constructor() {
    this.registerStudents = new FormGroup({
      nombre: new FormControl(null, []),
      edad: new FormControl(null, []),
      email: new FormControl(null, []),
      curso: new FormControl(null, []),
    }, []);  
  }

  
  getDataForm() {
    let mensaje: string = this.studentServices.insert(this.registerStudents.value);
    alert(mensaje);
    this.registerStudents.reset();
  }

}
