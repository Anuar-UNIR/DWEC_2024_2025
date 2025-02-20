import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { loginGuard } from './guards/login.guard';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartsListComponent } from './pages/carts-list/carts-list.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "login" },
    { path: "login", component: LoginComponent },
    {
        path: "dashboard", component: DashboardComponent, canActivate: [loginGuard], children: [
            { path: "", pathMatch: "full", redirectTo: "productos" },
            { path: "productos", component: ProductsListComponent },
            { path: "carts", component: CartsListComponent}
    ] }
    
    //{ path: "dashboard/admin", component: AdminComponent, canActivate: [loginGuard, RoleGuard] }
];
