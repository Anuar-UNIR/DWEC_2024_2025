import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { Component } from '@angular/core';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contacto', component: ContactoComponent}
];
