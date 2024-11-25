import { StudentServiceService } from './../../services/student-service.service';
import { Component, EventEmitter, inject, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICurso } from '../../interfaces/icurso';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {

  filerForm: any;
  cursos: ICurso[];
  studentServices = inject(StudentServiceService);
  @Output() cursoSelecciondo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.cursos = [];
  }

  ngOnInit() {
    this.cursos = this.studentServices.getAllCursos();
  }

  getDataFilter(form: any) {
    console.log(form.value.curso);
    this.cursoSelecciondo.emit(form.value.curso);
  }

}
  

