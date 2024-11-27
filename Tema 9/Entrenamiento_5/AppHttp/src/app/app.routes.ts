import { Routes } from '@angular/router';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SerieViewComponent } from './pages/serie-view/serie-view.component';
import { FormSerieComponent } from './pages/form-serie/form-serie.component';


export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "series" },
    { path: "series", component: SeriesListComponent },
    { path: "serie/:idserie", component: SerieViewComponent },
    { path: "nueva/serie", component: FormSerieComponent },
    { path: "actualizar/serie/:idserie", component: FormSerieComponent },

    
];
