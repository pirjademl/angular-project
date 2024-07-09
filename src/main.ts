import {
    bootstrapApplication,
    provideProtractorTestingSupport,
} from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routeConfig } from './app/routes';
bootstrapApplication(AppComponent, {
    providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((error) => {
    console.error(error);
});
