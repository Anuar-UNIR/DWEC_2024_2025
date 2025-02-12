import { Component, inject } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css'
})
export class HeroListComponent {

  heroService = inject(HeroService);

  ngOnInit(): void {
    this.heroService.getTotalSizeCharacters().subscribe((data: any) => {
      console.log("Numero total de elementos: " + data);
    });

    this.heroService.getAllHeroes(1,5).subscribe((data: any) => {
      console.log(data);
    });
  }
}
