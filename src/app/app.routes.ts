import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ProcessComponent } from './components/process/process.component';

export const routes: Routes = [
    {
        path:'discover',
        component: MainComponent
    },
    {
        path: 'process',
        component: ProcessComponent
    },
    {
        path: '**',
        redirectTo: 'discover'
    }
];
