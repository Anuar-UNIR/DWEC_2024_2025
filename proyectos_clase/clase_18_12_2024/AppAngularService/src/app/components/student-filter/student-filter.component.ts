import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ICurso } from '../../interfaces/icurso';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-filter.component.html',
  styleUrl: './student-filter.component.css'
})
export class StudentFilterComponent {

  cursos: ICurso[];
  studentService = inject(StudentService);

  constructor() {
    this.cursos = [];
  }

  ngOnInit(): void{
    this.cursos = this.studentService.getAllCourses();
  }

  getDataFilter(miForm: NgForm) {
      
  }

}
