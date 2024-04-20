import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from 'app/app.routes';

import { CookiesService } from 'app/modules/cookies/services/cookies.service';

export const appConfig: ApplicationConfig = {
  providers: [
    CookiesService,
    provideRouter(routes),
    provideHttpClient(),
  ]
};
