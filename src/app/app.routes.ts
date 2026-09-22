import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'ajuda', component: AjudaComponent},
    { path: 'sobre', component: SobreComponent},
];
