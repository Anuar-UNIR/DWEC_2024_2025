import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeriesService } from '../../services/series.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Serie } from '../../interfaces/serie';

@Component({
  selector: 'app-series-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './series-form.component.html',
  styleUrl: './series-form.component.css'
})
export class SeriesFormComponent {

  router = inject(Router);
  seriesService = inject(SeriesService);
  activatedRoute = inject(ActivatedRoute);

  seriesForm: FormGroup;
  tipo: string;

  constructor() {
    this.tipo = "Insertar";

    this.seriesForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      creator: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
      dates: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      channel: new FormControl('',[Validators.required])
    },
      []);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      if (params._id) {
        this.tipo = "Actualizar"
        //peticion al servicio getById
        const serieResponse : Serie = await this.seriesService.getById(params._id);

        this.seriesForm = new FormGroup({
          _id: new FormControl(serieResponse._id, []),
          title: new FormControl(serieResponse.title, [Validators.required]),
          creator: new FormControl(serieResponse.creator, [Validators.required]),
          rating: new FormControl(serieResponse.rating, [Validators.required, Validators.min(0), Validators.max(10)]),
          dates: new FormControl(serieResponse.dates, [Validators.required]),
          image: new FormControl(serieResponse.image, [Validators.required]),
          channel: new FormControl(serieResponse.channel,[Validators.required])
        }, []);
      }

    });
  }

  getDataForm() {
    //implentar llamadas al post y put del servicio
  }

}
