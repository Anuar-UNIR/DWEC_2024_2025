import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IHero } from '../../interfaces/ihero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  heroList: IHero[];
  heroService = inject(HeroService);


  constructor() {
    this.heroList = [];
  }

  ngOnInit(): void {

  }

  

}
