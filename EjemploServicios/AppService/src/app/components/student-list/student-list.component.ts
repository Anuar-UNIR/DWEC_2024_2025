import { Component, inject } from '@angular/core';
import { StudentServiceService } from '../../services/student-service.service';
import { IStudent } from '../../interfaces/istudent';
import { StudentCardComponent } from "../student-card/student-card.component";

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentCardComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  studentServiceService = inject(StudentServiceService);
  alumnos: IStudent[] = [];

  constructor() {
    this.alumnos = [];
  }

  
  ngOnInit() {
    this.alumnos = this.studentServiceService.getAll();
  }

}
