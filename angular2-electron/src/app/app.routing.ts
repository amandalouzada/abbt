import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NovoComponent } from './novo/novo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'novo', component: NovoComponent}

];

export const routing = RouterModule.forRoot(routes, { useHash: true });
