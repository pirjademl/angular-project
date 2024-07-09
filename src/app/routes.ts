import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Homepage',
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
    },
];
