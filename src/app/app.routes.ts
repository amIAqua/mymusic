import { Routes } from '@angular/router';

import { DashboardPageComponent } from 'app/pages/dashboard-page/dashboard-page.component';
import { AuthCallbackPageComponent } from 'app/pages/auth-callback/auth-callback.component';

export const routes: Routes = [
    { path: '', component: DashboardPageComponent },
    { path: 'callback', component: AuthCallbackPageComponent }
];
