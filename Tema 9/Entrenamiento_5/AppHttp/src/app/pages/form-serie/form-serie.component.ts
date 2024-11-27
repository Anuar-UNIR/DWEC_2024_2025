import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ISerie } from '../../interfaces/iserie.interface';

@Component({
  selector: 'app-form-serie',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form-serie.component.html',
  styleUrl: './form-serie.component.css'
})
export class FormSerieComponent {

  tipo: string = 'Nueva';
  seriesForm: FormGroup;

  constructor() {
    this.seriesForm = new FormGroup({
      title: new FormControl('', []),
      creator: new FormControl('', []),
      rating: new FormControl('', []),
      dates: new FormControl('', []),
      image: new FormControl('', []),
      channel: new FormControl('',[])
    }, []);
  }


  getDataForm() {
    let serie: ISerie = this.seriesForm.value;
    console.log(serie);
  }

}
