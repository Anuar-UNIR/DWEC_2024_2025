import { Routes } from '@angular/router';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroViewComponent } from './pages/hero-view/hero-view.component';
import { HeroFormComponent } from './pages/hero-form/hero-form.component';

export const routes: Routes = [

    { path: "", pathMatch: "full", redirectTo: "characters" },
    { path: "characters", component: HeroListComponent },
    { path: "details/:id", component: HeroViewComponent },
    { path: "character/new", component: HeroFormComponent },
    { path: "character/update/:id", component: HeroFormComponent },
    { path: "**", redirectTo: "characters"}
];
