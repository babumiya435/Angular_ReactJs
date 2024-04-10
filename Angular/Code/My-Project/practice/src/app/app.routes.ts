import { Routes } from '@angular/router';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { AboutComponentComponent } from './Components/about-component/about-component.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponentComponent },
    { path: 'about', component: AboutComponentComponent },
];
