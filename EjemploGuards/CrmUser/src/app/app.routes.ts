import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
import { PorductsListComponent } from './pages/porducts-list/porducts-list.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "login" },
    { path: "login", component: LoginComponent },
    {
        path: "dashboard", component: DashboardComponent, canActivate: [loginGuard],
        children: [
            { path: "", pathMatch: "full", redirectTo: "productos" },
            { path: "productos", component: PorductsListComponent}
        ]
    }
];
