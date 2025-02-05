import { Routes } from '@angular/router';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SeriesFormComponent } from './pages/series-form/series-form.component';
import { SeriesViewComponent } from './pages/series-view/series-view.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "series" },
    { path: "series", component: SeriesListComponent },
    { path: "nueva/serie", component: SeriesFormComponent },
    { path: "serie/:_id", component: SeriesViewComponent},
    { path: "actualizar/serie/:_id", component: SeriesFormComponent},
    {path: "**", redirectTo: "series"}
];
