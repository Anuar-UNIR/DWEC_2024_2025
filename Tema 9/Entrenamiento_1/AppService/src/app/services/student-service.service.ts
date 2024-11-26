import { Injectable } from '@angular/core';
import { IStudent } from '../interfaces/istudent';
import { ALUMNOS } from '../db/students.db';
import { ICurso } from '../interfaces/icurso';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


  private arrAlumnos: IStudent[];
  private arrCurso: ICurso[];
  private id;

  constructor() { 
    this.arrAlumnos = ALUMNOS;
    this.id = 4;
    this.arrCurso = [
      { titulo: '1 ESO', valor: '1ESO' },
      { titulo: '2 ESO', valor: '2ESO' },
      { titulo: '3 ESO', valor: '3ESO' },
      { titulo: '4 ESO', valor: '4ESO' },
      { titulo: '5 ESO', valor: '5ESO' },
      { titulo: '6 ESO', valor: '6ESO' },
      { titulo: '7 ESO', valor: '7ESO' },
    ];
  }

  getAllCursos(): ICurso[]{
    return this.arrCurso;
  }

  getAll(): IStudent[]{
    return this.arrAlumnos;
  }

  getById(id: number): IStudent | undefined{
    return this.arrAlumnos.find(student => student.id == id);
  }

  insert(alumno: IStudent): string {
    alumno.id = this.id;
    let longitud = this.arrAlumnos.push(alumno);
    this.id++;
    if (longitud) {
      return 'El alumno ha sido insertado correctamente'
    }
    else {
      return 'No ha sido posible insertar el alumno'
    }
  }

  filterByCourse(course: string): IStudent[] {
    console.log(course);
    return this.arrAlumnos.filter(alumno => alumno.curso.includes(course));
    
  }


}
