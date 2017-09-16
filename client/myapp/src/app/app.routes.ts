import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'homepage', component: HomeComponent},
];
  
export const appRoutingProviders:any [] = [];
export const routing = RouterModule.forRoot(routes);