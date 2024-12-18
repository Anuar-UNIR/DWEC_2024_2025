import { Component, inject } from '@angular/core';
import { IStudent } from '../../interfaces/istudent';
import { StudentService } from '../../services/student.service';
import { StudentCardComponent } from "../student-card/student-card.component";
import { StudentFilterComponent } from "../student-filter/student-filter.component";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentCardComponent, StudentFilterComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  alumnos: IStudent[];

  //Inyectar el servicio
  private studentService = inject(StudentService);

  constructor() {
    this.alumnos = [];
  }

  ngOnInit(): void{
    this.alumnos = this.studentService.getAllStudents();
  }



}
