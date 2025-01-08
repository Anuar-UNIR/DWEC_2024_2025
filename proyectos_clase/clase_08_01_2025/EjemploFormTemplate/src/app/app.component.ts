import { Component } from '@angular/core';
import { FormTemplateComponent } from "./components/form-template/form-template.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormTemplateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EjemploFormTemplate';
}
