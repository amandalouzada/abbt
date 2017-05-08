import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InserirComponent } from './inserir/inserir.component';

const APP_ROUTES: Routes = [
    { path: '', component: InserirComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
